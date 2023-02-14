import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITipoUsuario } from 'src/app/model/tipousuario-response-interface';
import { IUsuario, IUsuario2Form, IUsuario2Send } from 'src/app/model/usuario-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { EmitEvent, Events, UsuarioService } from 'src/app/service/usuario.service';
import { Output, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

declare let bootstrap: any;

@Component({
  selector: 'app-usuario-edit-user-routed',
  templateUrl: './usuario-edit-user-routed.component.html',
  styleUrls: ['./usuario-edit-user-routed.component.css']
})


export class UsuarioEditUserRoutedComponent implements OnInit {

  id: number = 0;
  @Input() oUsuario: IUsuario = null;
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
    private oFormBuilder: FormBuilder,
    private oTipousuarioService: TipousuarioService,
  ) { }

  ngOnInit() {
    this.id = this.oUsuario.id;
    this.getOne();
  }

  getOne() {
    this.oUsuarioService.getOne(this.id).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
        console.log(data);
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          nombre: [data.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          apellido1: [data.apellido1, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          apellido2: [data.apellido2, [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
          email: [data.email, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
          login: [data.login, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
          fechaNacimiento: [data.fechaNacimiento, [Validators.required, /* Validators.pattern(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/) */]],
          id_tipousuario: [data.tipousuario.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
        });
        this.updateTipousuarioDescription(this.oUsuario.tipousuario.id);

      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
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
      console.log("is valid")
      this.oUsuarioService.updateOne(this.oUsuario2Send).subscribe({
        next: (data: any) => {
          alert("Usuario actualizado")
          this.oUsuarioService.usuarioObservale.emit(data);
          console.log(data);
          
          //open bootstrap modal here
        /*   this.modalTitle = "dogFriends";
          this.modalContent = "Usuario " + this.id + " actualizado";
          this.showModal(); */
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
      /* this.oRouter.navigate(['/admin/usuario/view', this.id])

      EMITIR EVENTO PARA ACTUALIZAR PADRE
       */
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
        this.tipousuarioDescription = "Tipousuario not found";        
        this.oForm.controls['id_tipousuario'].setErrors({'incorrect': true});
      }
    })
  }





}
