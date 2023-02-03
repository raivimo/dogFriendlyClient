import { NotExpr } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IFactura, IFacturaForm, IFacturaSend } from 'src/app/model/factura-interface';
import { IPaseo } from 'src/app/model/paseo-interface';
import { FacturaService } from 'src/app/service/factura.service';
import { PaseoService } from 'src/app/service/paseo.service';
declare let bootstrap: any;


@Component({
  selector: 'app-factura-edit-admin-routed',
  templateUrl: './factura-edit-admin-routed.component.html',
  styleUrls: ['./factura-edit-admin-routed.component.css']
})
export class FacturaEditAdminRoutedComponent implements OnInit {

  id: number = 0;
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
    private oFacturaService: FacturaService,
    private oPaseoService: PaseoService,
    private oFormBuilder: FormBuilder
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.getOne();
  }

  getOne() {
    this.oFacturaService.getOne(this.id).subscribe({
      next: (data: IFactura) => {
        this.oFactura = data;
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          fecha: [data.fecha, [Validators.required,]],
          iva: [data.iva, [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
          pagado: [data.pagado, [Validators.required, /* Validators.pattern(/^\d{1,6}$/) */]],

          id_paseo: [data.paseo.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
        });
        this.updatePaseoDescription(this.oFactura.paseo.id);
      }
    })
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
      this.oFacturaService.updateOne(this.oFacturaSend).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "dogFriendly";
          this.modalContent = "Factura " + data + " creada";
          this.showModal();
        }
      })
    }
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      this.oRouter.navigate(['/admin/factura/view/' + this.id])
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
        this.oForm.controls['id_paseo'].setErrors({ 'incorrect': true });
      }
    })
  }



}
