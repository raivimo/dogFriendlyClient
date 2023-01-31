import { IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { ITipoUsuario } from 'src/app/model/tipousuario-response-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
declare let bootstrap: any;

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

  oUsuario: IUsuario = null;
  oUsuario2Form: IUsuario2Form = null;
  oUsuario2Send: IUsuario2Send = null;
  oForm: FormGroup<IUsuario2Form>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  tipousuarioDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
    private oTipousuarioService: TipousuarioService,
    private oFormBuilder: FormBuilder,
  ) {  }

  ngOnInit():void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apellido1: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      apellido2: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      fechaNacimiento: ["", [Validators.required, /* Validators.pattern(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/)] */]],
      login: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],

      id_tipousuario: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    }); 
  }

  onSubmit() {
    console.log("apretando boton!");
    this.oUsuario2Send = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      apellido1: this.oForm.value.apellido1,
      apellido2: this.oForm.value.apellido2,
      email: this.oForm.value.email,
      fechaNacimiento: this.oForm.value.fechaNacimiento,
      login: this.oForm.value.login,

      tipousuario: { id: this.oForm.value.id_tipousuario }
    }
    if (this.oForm.valid) {

      this.oUsuarioService.newOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          this.modalTitle = "dogFriendly";
          this.modalContent = "Usuario " + data + " creado";
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
      this.oRouter.navigate(['/admin/usuario/view/' + id])
    })
    this.myModal.show()
  }

  openModalFindTipousuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTipousuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeTipousuarioModal(id_tipousuario: number) {
    this.oForm.controls['id_tipousuario'].setValue(id_tipousuario);
    this.updateTipousuarioDescription(id_tipousuario);
    this.myModal.hide();
  }

  updateTipousuarioDescription(id_tipousuario: number) {
    this.oTipousuarioService.getOne(id_tipousuario).subscribe({
      next: (data: ITipoUsuario) => {      
        this.tipousuarioDescription = data.nombre;        
      },
      error: (error: any) => {
        this.tipousuarioDescription = "TipoUsuario not found";        
        this.oForm.controls['id_tipousuario'].setErrors({'incorrect': true});
      }
    })
  }




}
