import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { IPaseo, IPaseoForm, IPaseoSend } from 'src/app/model/paseo-interface';
import { IPerro } from 'src/app/model/perro-interface';
import { ITipoPaseo } from 'src/app/model/tipopaseo-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { PaseoService } from 'src/app/service/paseo.service';
import { PerroService } from 'src/app/service/perro.service';
import { TipopaseoService } from 'src/app/service/tipopaseo.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SessionService } from 'src/app/service/session.service';

declare let bootstrap: any;

@Component({
  selector: 'app-paseo-new-user-routed',
  templateUrl: './paseo-new-user-routed.component.html',
  styleUrls: ['./paseo-new-user-routed.component.css']
})
export class PaseoNewUserRoutedComponent implements OnInit {

  @Input() id_paseador;

  oPaseo: IPaseo = null;
  oPaseoForm: IPaseoForm = null;
  oPaseoSend: IPaseoSend = null;
  oForm: FormGroup<IPaseoForm>;
  // modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';
  // foreigns
  tipopaseoDescription: string = '';
  usuarioDescription: string = '';
  perroDescription: string = '';

  constructor(
    private oRouter: Router,
    private oFormBuilder: FormBuilder,
    private oSessionService: SessionService,
    private oUsuarioService: UsuarioService,
    private oTipoPaseoService: TipopaseoService,
    private oPerroService: PerroService,
    private oPaseoService: PaseoService,
  ) { }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      fecha: ["", [Validators.required,]],
      lugar: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      precio: ["", [Validators.required, Validators.required, Validators.pattern(/^\d{1,6}$/)]],

      id_tipopaseo: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_usuario: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_perro: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
  }

  ngOnChanges() {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      fecha: ["", [Validators.required,]],
      lugar: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      precio: ["", [Validators.required, Validators.required, Validators.pattern(/^\d{1,6}$/)]],

      id_tipopaseo: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_usuario: [this.id_paseador, [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
      id_perro: ["", [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
    });
  }

  onSubmit() {
    console.log("Aprentando boton!")
    this.oPaseoSend = {
      id: this.oForm.value.id,
      fecha: this.oForm.value.fecha,
      lugar: this.oForm.value.lugar,
      precio: this.oForm.value.precio,

      tipopaseo: { id: this.oForm.value.id_tipopaseo },
      usuario: { id: this.oForm.value.id_usuario },
      perro: { id: this.oForm.value.id_perro }
    }
    if (this.oForm.valid) {
      this.oPaseoService.newOne(this.oPaseoSend).subscribe({
        next: (data: number) => {
          this.oPaseoService.paseoObservable.emit();
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
    })
    this.myModal.show()
  }

  openModalFindTipopaseo(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findTipopaseo"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }
  openModalFindUsuario(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findUsuario"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }
  openModalFindPerro(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("findPerro"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeTipopaseoModal(id_tipopaseo: number) {
    this.oForm.controls['id_tipopaseo'].setValue(id_tipopaseo);
    this.updateTipopaseoDescription(id_tipopaseo);
    this.myModal.hide();
  }
  closeUsuarioModal(id_usuario: number) {
    this.oForm.controls['id_usuario'].setValue(id_usuario);
    this.updateUsuarioDescription(id_usuario);
    this.myModal.hide();
  }
  closePerroModal(id_perro: number) {
    this.oForm.controls['id_perro'].setValue(id_perro);
    this.updatePerroDescription(id_perro);
    this.myModal.hide();
  }

  updateTipopaseoDescription(id_tipopaseo: number) {
    this.oTipoPaseoService.getOne(id_tipopaseo).subscribe({
      next: (data: ITipoPaseo) => {
        this.tipopaseoDescription = data.nombre;
      },
      error: (error: any) => {
        this.tipopaseoDescription = "Tipo paseo no encontrado";
        this.oForm.controls['id_tipopaseo'].setErrors({ 'incorrect': true });
      }
    })
  }

  updateUsuarioDescription(id_usuario: number) {
    this.oUsuarioService.getOne(id_usuario).subscribe({
      next: (data: IUsuario) => {
        this.usuarioDescription = data.nombre;
      },
      error: (error: any) => {
        this.usuarioDescription = "Usuario no encontrado";
        this.oForm.controls['id_tipopaseo'].setErrors({ 'incorrect': true });
      }
    })
  }

  updatePerroDescription(id_perro: number) {
    this.oPerroService.getOne(id_perro).subscribe({
      next: (data: IPerro) => {
        this.perroDescription = data.nombre;
      },
      error: (error: any) => {
        this.perroDescription = "Perro no encontrado";
        this.oForm.controls['id_perro'].setErrors({ 'incorrect': true });
      }
    })
  }




}
