import { Component, OnInit } from '@angular/core';
import { IFactura, IFacturaForm, IFacturaSend } from '../../../../../../model/factura-interface';
import { Router, ActivatedRoute } from '@angular/router';
import { FacturaService } from '../../../../../../service/factura.service';
import { PaseoService } from 'src/app/service/paseo.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Pageable } from '../../../../../../model/shared-interface';
import { IPaseo } from '../../../../../../model/paseo-interface';
declare let bootstrap: any;

@Component({
  selector: 'app-factura-new-admin-routed',
  templateUrl: './factura-new-admin-routed.component.html',
  styleUrls: ['./factura-new-admin-routed.component.css']
})
export class FacturaNewAdminRoutedComponent implements OnInit {

  oFactura: IFactura = null;
  oFacturaForm: IFacturaForm = null;
  oFacturaSend: IFacturaSend = null;
  oForm: FormGroup<IFacturaForm>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  paseoDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oFacturaService : FacturaService,
    private oPaseoService : PaseoService,
    private oFormBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      fecha: ["", [Validators.required,]],
      iva: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      pagado: ["", [Validators.required, /* Validators.pattern(/^\d{1,6}$/) */]],

      id_paseo: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    }); 
  }

  onSubmit() {
    console.log("apretando boton!");
    this.oFacturaSend = {
      id: this.oForm.value.id,
      fecha: this.oForm.value.fecha,
      iva: this.oForm.value.iva,
      pagado: this.oForm.value.pagado,
      
      paseo: { id: this.oForm.value.id_paseo }
    }
    if (this.oForm.valid) {
      this.oFacturaService.newOne(this.oFacturaSend).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "dogFriendly";
          this.modalContent = "Factura " + data + " creada";
          this.showModal(data);
        }
      })
    }
  }

  showModal = (id: number) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      console.log({id})
      this.oRouter.navigate(['/admin/factura/view/' + id])
    })
    this.myModal.show()
  }

  openModalFindPaseo(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findPaseo"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closePaseoModal(id_paseo: number) {
    this.oForm.controls['id_paseo'].setValue(id_paseo);
    this.updatePaseoDescription(id_paseo);
    this.myModal.hide();
  }

  updatePaseoDescription(id_paseo: number) {
    this.oPaseoService.getOne(id_paseo).subscribe({
      next: (data: IPaseo) => {      
        this.paseoDescription = data.fecha + " / " + data.lugar;        
      },
      error: (error: any) => {
        this.paseoDescription = "Paseo no encontrado";        
        this.oForm.controls['id_paseo'].setErrors({'incorrect': true});
      }
    })
  }


}
