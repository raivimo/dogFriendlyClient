import { Component, Input, OnInit } from '@angular/core';
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
  selector: 'app-perro-edit-user-routed',
  templateUrl: './perro-edit-user-routed.component.html',
  styleUrls: ['./perro-edit-user-routed.component.css']
})
export class PerroEditUserRoutedComponent implements OnInit {

  @Input() id: number;

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
    private oPerroService: PerroService,
    private oFormBuilder: FormBuilder,
    private oUsuarioService: UsuarioService,
    private oRazaService: RazaService
  ) { }

  ngOnInit() {

  }

  ngOnChanges() {
    this.getOne();
  }

  getOne() {
    if (this.id != 0) {
      this.oPerroService.getOne(this.id).subscribe({
        next: (data: IPerro) => {
          this.oPerro = data;
          this.oForm = <FormGroup>this.oFormBuilder.group({
            id: [data.id, [Validators.required]],
            nombre: [data.nombre, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
            fechaNacimiento: [data.fechaNacimiento, [Validators.required]],
            genero: [data.genero, [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
            imagen: [data.imagen, [Validators.required, Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$')]],
            peso: [data.peso, [Validators.required, Validators.minLength(2), Validators.maxLength(15)]],
            sociable: [data.sociable, [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
            puedeIrSuelto: [data.puedeIrSuelto, [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
            esJugueton: [data.esJugueton, [Validators.required, Validators.pattern(/^\d{0,1}$/)]],

            id_raza: [data.raza.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
            id_usuario: [data.usuario.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
          });
          this.updateRazaDescription(this.oPerro.raza.id);
          this.updateUsuarioDescription(this.oPerro.raza.id);
        }
      })
    }
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

      raza: { id: this.oForm.value.id_raza },
      usuario: { id: this.oForm.value.id_usuario }
    }
    /* if (this.oForm.valid) { */
    console.log("llega")
    this.oPerroService.updateOne(this.oPerroSend).subscribe({
      next: (data: any) => {
        this.oPerroService.perroObervable.emit(data);
        //open bootstrap modal here
        /*    this.modalTitle = "dogFriends";
           this.modalContent = "Perro " + this.id + " actualizado";
           this.showModal(); */
      }
    })
    /* } */
  }

  showModal = () => {
    this.myModal = new bootstrap.Modal(document.getElementById(this.mimodal), { //pasar el myModal como parametro
      keyboard: false
    })
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
    })
    this.myModal.show()
  }


  openModalFindRaza(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findRaza"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeRazaModal(id_raza: number) {
    this.oForm.controls['id_raza'].setValue(id_raza);
    this.updateUsuarioDescription(id_raza);
    this.myModal.hide();
  }

  updateUsuarioDescription(id_usuario: number) {
    this.oUsuarioService.getOne(id_usuario).subscribe({
      next: (data: IUsuario) => {
        this.usuarioDescription = data.nombre;
      },
      error: (error: any) => {
        this.usuarioDescription = "Usuario no encontrado";
        this.oForm.controls['id_usuario'].setErrors({ 'incorrect': true });
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
        this.oForm.controls['id_raza'].setErrors({ 'incorrect': true });
      }
    })
  }


}
