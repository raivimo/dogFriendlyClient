import { Component, OnInit } from '@angular/core';
import { IPaseo, IPaseoForm, IPaseoSend } from 'src/app/model/paseo-interface';
import { PerroService } from 'src/app/service/perro.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UsuarioService } from 'src/app/service/usuario.service';
import { TipopaseoService } from 'src/app/service/tipopaseo.service';
import { ITipoPaseo } from 'src/app/model/tipopaseo-interface';
import { PaseoService } from 'src/app/service/paseo.service';
import { IUsuario } from 'src/app/model/usuario-interface';
import { IPerro } from 'src/app/model/perro-interface';

declare let bootstrap: any;
@Component({
  selector: 'app-paseo-edit-admin-routed',
  templateUrl: './paseo-edit-admin-routed.component.html',
  styleUrls: ['./paseo-edit-admin-routed.component.css']
})
export class PaseoEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oPaseo: IPaseo = null;
  oPaseoForm: IPaseoForm = null;
  oPaseoSend: IPaseoSend = null;
  oForm: FormGroup<IPaseoForm>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns
 tipopaseoDescription: string = "";
 usuarioDescription: string = "";
 perroDescription: string = "";


  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,

    private oUsuarioService: UsuarioService,
    private oTipoPaseoService: TipopaseoService,
    private oPerroService : PerroService,
    private oPaseoService : PaseoService,
  ) { 
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oPaseoService.getOne(this.id).subscribe({
      next: (data: IPaseo) => {
        this.oPaseo = data;
        this.oForm = <FormGroup>this.oFormBuilder.group({
          id: [data.id, [Validators.required]],
          fecha: [data.fecha, [Validators.required, Validators.pattern(/^([0-2][0-9]|3[0-1])(\/|-)(0[1-9]|1[0-2])\2(\d{4})$/)]],
          lugar: [data.lugar, [Validators.required, Validators.minLength(3), Validators.maxLength(10)]],
          precio: [data.precio, [Validators.required, Validators.minLength(3), Validators.maxLength(15)]],
          
          id_tipopaseo: [data.tipopaseo.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
          id_usuario:  [data.usuario.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]],
          id_perro:  [data.perro.id, [Validators.required, Validators.pattern(/^\d{1,6}$/)]]
        });
        this.updateTipopaseoDescription(this.oPaseo.tipopaseo.id);
        this.updateUsuarioDescription(this.oPaseo.usuario.id);
        this.updatePerroDescription(this.oPaseo.perro.id);

      }
    })
  }

  onSubmit() {
    console.log("onSubmit");
    this.oPaseoSend = {
      id: this.oForm.value.id,
      fecha: this.oForm.value.fecha,
      lugar: this.oForm.value.lugar,
      precio: this.oForm.value.precio,

      tipopaseo: {id:this.oForm.value.id_tipopaseo},
      usuario: { id: this.oForm.value.id_usuario },
      perro: { id: this.oForm.value.id_perro },
    }
    if (this.oForm.valid) {
      console.log("is valid")
      this.oPaseoService.updateOne(this.oPaseoSend).subscribe({
        next: (data: number) => {
          
          //open bootstrap modal here
          this.modalTitle = "dogFriends";
          this.modalContent = "Paseo " + this.id + " actualizado";
          this.showModal();
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
      this.oRouter.navigate(['/admin/paseo/view', this.id])
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
        this.oForm.controls['id_tipopaseo'].setErrors({'incorrect': true});
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
        this.oForm.controls['id_usuario'].setErrors({'incorrect': true});
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
        this.oForm.controls['id_perro'].setErrors({'incorrect': true});
      }
    })
  }


}
