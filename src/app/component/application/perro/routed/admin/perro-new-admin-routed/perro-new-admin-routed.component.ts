import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IPerro, IPerroForm, IPerroSend } from 'src/app/model/perro-interface';
import { IRaza } from 'src/app/model/raza-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { PerroService } from 'src/app/service/perro.service';
import { RazaService } from 'src/app/service/raza.service';
import { UsuarioService } from 'src/app/service/usuario.service';
declare let bootstrap: any;

@Component({
  selector: 'app-perro-new-admin-routed',
  templateUrl: './perro-new-admin-routed.component.html',
  styleUrls: ['./perro-new-admin-routed.component.css']
})
export class PerroNewAdminRoutedComponent implements OnInit {

  oPerro: IPerro = null;
  oPerroForm: IPerroForm = null;
  oPerroSend: IPerroSend = null;
  oForm: FormGroup<IPerroForm>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
  usuarioDescription: string = "";
  razaDescription: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oPerroService: PerroService,
    private oFormBuilder: FormBuilder,
    private oUsuarioService: UsuarioService,
    private oRazaService: RazaService
  ) { }

  ngOnInit() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      fechaNacimiento: ["", [Validators.required, Validators.pattern(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/)]],
      genero: ["", [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
      imagen: [""],
      peso: ["", [Validators.required, Validators.pattern(/^\d{1,4}$/)]],
      sociable: ["", [Validators.required,Validators.pattern(/^\d{0,1}$/)]],
      puedeIrSuelto: ["", [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
      esJugueton: ["", [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
      id_raza: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_usuario: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
    }
  
    
  onSubmit() {
    console.log("onSubmit");
    this.oPerroSend = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      fechaNacimiento: this.oForm.value.fechaNacimiento,
      genero: this.oForm.value.genero,
      imagen: this.oForm.value.imagen,
      peso: this.oForm.value.peso,
      sociable: this.oForm.value.sociable,
      puedeIrSuelto: this.oForm.value.puedeIrSuelto,
      esJugueton: this.oForm.value.esJugueton,

      raza: { id:this.oForm.value.id_raza },
      usuario: { id:this.oForm.value.id_usuario }
    }
    if (this.oForm.valid) {
      this.oPerroService.newOne(this.oPerroSend).subscribe({
        next: (data: number) => {
          
          //open bootstrap modal here
          this.modalTitle = "dogFriends";
          this.modalContent = "Perro " + data + " creado";
          this.showModal(data);
        }
      })
    }
  }

  showModal = (id:number) => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
      
      this.oRouter.navigate(['/admin/perro/view' + id])
    })
    this.myModal.show()
  }

  openModalFindUsuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findUsuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeUsuarioModal(id_usuario: number) {
    this.oForm.controls['id_usuario'].setValue(id_usuario);
    this.updateUsuarioDescription(id_usuario);
    this.myModal.hide();
  }

  openModalFindRaza(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findRaza"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeRazaModal(id_raza: number) {
    this.oForm.controls['id_raza'].setValue(id_raza);
    this.updateRazaDescription(id_raza);
    this.myModal.hide();
  }

  updateUsuarioDescription(id_usuario: number) {
    this.oUsuarioService.getOne(id_usuario).subscribe({
      next: (data: IUsuario) => {      
        this.usuarioDescription = data.nombre;        
      },
      error: (error: any) => {
        this.usuarioDescription = "Usuario no encontrado";        
        this.oForm.controls['id_usuario'].setErrors({'incorrect': true});
      }
    })
  }

  updateRazaDescription(id_raza: number) {
    this.oRazaService.getOne(id_raza).subscribe({
      next: (data: IRaza) => {      
        this.razaDescription = data.nombre;        
      },
      error: (error: any) => {
        this.usuarioDescription = "Raza no encontrado";        
        this.oForm.controls['id_raza'].setErrors({'incorrect': true});
      }
    })
  }





}
