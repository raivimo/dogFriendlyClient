import { Component, OnInit } from '@angular/core';
import { ITipoPaseo, ITipoPaseoSend, ITipoPaseoForm } from '../../../../../../model/tipopaseo-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { TipopaseoService } from '../../../../../../service/tipopaseo.service';
import { ActivatedRoute, Router } from '@angular/router';
declare let bootstrap: any;

@Component({
  selector: 'app-tipopaseo-new-admin-routed',
  templateUrl: './tipopaseo-new-admin-routed.component.html',
  styleUrls: ['./tipopaseo-new-admin-routed.component.css']
})
export class TipopaseoNewAdminRoutedComponent implements OnInit {

  oTipoPaseo: ITipoPaseo = null;
  oTipoPaseoSend: ITipoPaseoSend = null;
  oTipoPaseoForm: ITipoPaseoForm = null;
  oForm: FormGroup<ITipoPaseoForm>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oTipoPaseoService: TipopaseoService
  ) { }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      duracion: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
  }

  onSubmit() {
    console.log("Aprentando boton!")
    this.oTipoPaseoSend = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      duracion: this.oForm.value.duracion
    }
    if (this.oForm.valid) {

      this.oTipoPaseoService.newOne(this.oTipoPaseoSend).subscribe({
        next: (data: number) => {
          
          //open bootstrap modal here
          this.modalTitle = "dogFriendly";
          this.modalContent = "Tipo de Paseo " + data + " creado";
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
      this.oRouter.navigate(['/admin/tipopaseo/view/' + id])
    })
    this.myModal.show()
  }



}
