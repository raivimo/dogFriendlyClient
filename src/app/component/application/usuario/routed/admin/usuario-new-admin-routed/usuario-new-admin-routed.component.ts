import { IUsuario2Form, IUsuario2Send } from '../../../../../../model/usuario-interface';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
declare let bootstrap: any;

@Component({
  selector: 'app-usuario-new-admin-routed',
  templateUrl: './usuario-new-admin-routed.component.html',
  styleUrls: ['./usuario-new-admin-routed.component.css']
})
export class UsuarioNewAdminRoutedComponent implements OnInit {

 
  //id: number = 0;
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
    private oFormBuilder: FormBuilder,
  ) {
    //this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(5), Validators.maxLength(10)]],
      apellido1: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      apellido2: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
      email: ["", [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
      fechaNacimiento: [""],
      login: ["", [Validators.required, Validators.minLength(6), Validators.maxLength(10)]],
      id_tipousuario: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    }); 
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
      this.oUsuarioService.newOne(this.oUsuario2Send).subscribe({
        next: (data: number) => {
          //open bootstrap modal here
          console.log("eee")
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

  /* openModalFindTeam(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTeam"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()


  }

  closeTeamModal(id_team: number) {
    this.oForm.controls['id_team'].setValue(id_team);
    this.updateTeamDescription(id_team);
    this.myModal.hide();
  }

  updateTeamDescription(id_team: number) {
    this.oTeamService.getOne(id_team).subscribe({
      next: (data: ITeam) => {      
        this.teamDescription = data.name;        
      },
      error: (error: any) => {
        this.teamDescription = "Team not found";        
        this.oForm.controls['id_team'].setErrors({'incorrect': true});
      }
    })
  } */


  openModalFindTipousuario(): void {

  }

}
