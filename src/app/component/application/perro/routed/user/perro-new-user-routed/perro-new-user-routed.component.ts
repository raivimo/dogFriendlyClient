import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IPage } from 'src/app/model/generic-types-interface';
import { IPerro, IPerroForm, IPerroSend } from 'src/app/model/perro-interface';
import { IRaza } from 'src/app/model/raza-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { PerroService } from 'src/app/service/perro.service';
import { RazaService } from 'src/app/service/raza.service';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let bootstrap: any;

@Component({
  selector: 'app-perro-new-user-routed',
  templateUrl: './perro-new-user-routed.component.html',
  styleUrls: ['./perro-new-user-routed.component.css']
})
export class PerroNewUserRoutedComponent implements OnInit {

  @Output() actualizaPerros = new EventEmitter<number>();
  @Input() oUsuario: IUsuario;

  responseFromServer: IPage<IPerro>;


  oPerro: IPerro = null;
  oPerroForm: IPerroForm = null;
  oPerroSend: IPerroSend = null;
  oPerroSendDefault: IPerroSend = null;
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
      fechaNacimiento: ["", [Validators.required,]],
      genero: ["", [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
      imagen: [""],
      peso: ["", [Validators.required, Validators.pattern(/^\d{1,4}$/)]],
      sociable: ["", [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
      puedeIrSuelto: ["", [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
      esJugueton: ["", [Validators.required, Validators.pattern(/^\d{0,1}$/)]],
      id_raza: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_usuario: [this.oUsuario.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
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

      raza: { id: this.oForm.value.id_raza },
      usuario: { id: this.oForm.value.id_usuario }
    }
    if (this.oForm.valid) {
      console.log(this.oPerroSend + "llega")
      this.oPerroService.newOne(this.oPerroSend).subscribe({
        next: (data: number) => {
          this.oPerroService.perroObervable.emit();
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
      console.log({ id })
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
    this.updateRazaDescription(id_raza);
    this.myModal.hide();
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
