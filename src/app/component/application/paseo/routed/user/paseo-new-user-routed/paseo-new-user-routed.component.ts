import { Component, EventEmitter, Input, OnInit, Output, OnChanges } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { IPaseo, IPaseoForm, IPaseoSend } from 'src/app/model/paseo-interface';
import { IPerro } from 'src/app/model/perro-interface';
import { ITipoPaseo } from 'src/app/model/tipopaseo-interface';
import { PaseoService } from 'src/app/service/paseo.service';
import { PerroService } from 'src/app/service/perro.service';
import { TipopaseoService } from 'src/app/service/tipopaseo.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SessionService } from 'src/app/service/session.service';
import { PrimeNGConfig } from 'primeng/api';
import { IUsuario } from 'src/app/model/usuario-interface';


declare let bootstrap: any;

@Component({
  selector: 'app-paseo-new-user-routed',
  templateUrl: './paseo-new-user-routed.component.html',
  styleUrls: ['./paseo-new-user-routed.component.css']
})
export class PaseoNewUserRoutedComponent implements OnChanges {

  @Input() id_paseador;
  @Output() closeEvent = new EventEmitter<number>();

  oPerro: IPerro = null;

  oPaseo: IPaseo = null;
  oPaseoSend: IPaseoSend = null;
  oPaseoSendLista: IPaseoSend [] = [];
  oForm: FormGroup<IPaseoForm>;

  // modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';

  // foreigns
  tipopaseoDescription: string = '';

  //PickList
  perrosDisponibles: IPerro[];
  perrosSeleccionados: IPerro[];

  sourceFilterValue: string = '';
  targetFilterValue: string = '';


  id_UsuarioFilter: number = 0;
  tutorial: number = 0;
  oPaseoSendNew: IPaseo;

  constructor(
    private oFormBuilder: FormBuilder,
    private oTipoPaseoService: TipopaseoService,
    private oPerroService: PerroService,
    private oPaseoService: PaseoService,
    private oSessionService: SessionService,
    private oUsuarioService: UsuarioService,
    private primengConfig: PrimeNGConfig )
     { this.getUserID(), this.perrosSeleccionados = [] }


  ngOnChanges() {
    this.getListPerrosUsuario();
    this.primengConfig.ripple = true;

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

  getListPerrosUsuario() {
    this.oPerroService.getListPerrosUsuario(this.id_UsuarioFilter)
      .subscribe({
        next: (resp: any ) => {
          this.perrosDisponibles = resp;
          }
      })
  }

  getUserID() {
    this.oSessionService.getUserId()
    .subscribe({
      next: (n: number) => {
        this.id_UsuarioFilter = n;
      }
    })
  }


  mandarPerros(){
    for (let index = 0; index < this.perrosSeleccionados.length; index++) {
      this.oPaseoSendNew = JSON.parse(JSON.stringify(this.oPaseoSend))
      this.oPaseoSendNew.perro.id = this.perrosSeleccionados[index].id;
      this.oPaseoSendLista.push(this.oPaseoSendNew)
    }
  }


  onSubmit() {
    console.log("Aprentando boton!")
    this.cambiarTutorial(this.tutorial = 0)

    this.oPaseoSend = {
      id: this.oForm.value.id,
      fecha: this.oForm.value.fecha,
      lugar: this.oForm.value.lugar,
      precio: this.oForm.value.precio,

      tipopaseo: { id: this.oForm.value.id_tipopaseo },
      usuario: { id: this.oForm.value.id_usuario },
      perro: { id: this.oForm.value.id_perro }
    }
    this.mandarPerros();
    console.log(this.oPaseoSendLista)
    this.oPaseoService.newList(this.oPaseoSendLista).subscribe({
      next: (data: number) => {
        this.oPaseoService.paseoObservable.emit();
      }
    })

  /*   if (this.oForm.valid) {
      this.oPaseoService.newOne(this.oPaseoSend).subscribe({
        next: (data: number) => {
          this.oPaseoService.paseoObservable.emit();
        }
      })
    } */
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

  closeTipopaseoModal(id_tipopaseo: number) {
    this.oForm.controls['id_tipopaseo'].setValue(id_tipopaseo);
    this.updateTipopaseoDescription(id_tipopaseo);
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

  cambiarTutorial(tutorial: number): void {
    this.closeEvent.emit(tutorial=1);
  }









}
