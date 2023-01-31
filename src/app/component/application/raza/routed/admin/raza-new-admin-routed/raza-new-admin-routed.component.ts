import { Component, OnInit } from '@angular/core';
import { IRaza, IRazaForm, IRazaSend } from 'src/app/model/raza-interface';
import { RazaService } from 'src/app/service/raza.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
declare let bootstrap: any;

@Component({
  selector: 'app-raza-new-admin-routed',
  templateUrl: './raza-new-admin-routed.component.html',
  styleUrls: ['./raza-new-admin-routed.component.css']
})
export class RazaNewAdminRoutedComponent implements OnInit {
   
  oRaza: IRaza = null;
  oRazaForm: IRazaForm = null;
  oRazaSend: IRazaSend = null;
  oForm: FormGroup<IRazaForm>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";
  // foreigns


  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oRazaService: RazaService,
    private oFormBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.oForm = <FormGroup>this.oFormBuilder.group({
      id: [""],
      nombre: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      tamanyo: ["", [Validators.required, Validators.minLength(3), Validators.maxLength(20)]]
    });
  }

  onSubmit() {
    console.log("Aprentando boton!")
    this.oRazaSend = {
      id: this.oForm.value.id,
      nombre: this.oForm.value.nombre,
      tamanyo: this.oForm.value.tamanyo
    }
    if (this.oForm.valid) {
      this.oRazaService.newOne(this.oRazaSend).subscribe({
        next: (data: number) => {
          
          //open bootstrap modal here
          this.modalTitle = "dogFriendly";
          this.modalContent = "Raza de Perro  " + data + " creada";
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
      this.oRouter.navigate(['/admin/raza/view/' + id])
    })
    this.myModal.show()
  }






  



}
