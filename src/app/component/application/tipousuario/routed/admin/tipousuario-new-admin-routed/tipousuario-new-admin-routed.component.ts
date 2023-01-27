import { Component, OnInit } from '@angular/core';
import { ITipoUsuario, } from 'src/app/model/tipousuario-response-interface';
import { ITipoUsuarioForm, ITipoUsuarioSend } from '../../../../../../model/tipousuario-response-interface';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

declare let bootstrap: any;

@Component({
  selector: 'app-tipousuario-new-admin-routed',
  templateUrl: './tipousuario-new-admin-routed.component.html',
  styleUrls: ['./tipousuario-new-admin-routed.component.css']
})

export class TipousuarioNewAdminRoutedComponent implements OnInit {


  oTipoUsuario: ITipoUsuario = null;
  oTipoUsuarioForm: ITipoUsuarioForm = null;
  oTipoUsuarioSend: ITipoUsuarioSend = null;
  oForm: FormGroup<ITipoUsuarioForm>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oTipoUsuarioService: TipousuarioService,
    private oFormBuilder: FormBuilder,
  ) {   }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(10)]]
    });
  }

  onSubmit() {
    console.log("Aprentando boton!")
    this.oTipoUsuarioSend = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre
    }
    if (this.oForm.valid) {
   
      this.oTipoUsuarioService.newOne(this.oTipoUsuarioSend).subscribe({
        next: (data: number) => {
          
          //open bootstrap modal here
          this.modalTitle = "dogFriendly";
          this.modalContent = "Tipo de Usuario " + data + " creado";
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
      this.oRouter.navigate(['/admin/tipousuario/view/' + id])
    })
    this.myModal.show()
  }









}
