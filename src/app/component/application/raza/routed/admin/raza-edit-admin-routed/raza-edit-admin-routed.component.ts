import { Component, OnInit } from '@angular/core';
import { IRaza, IRazaForm, IRazaSend } from '../../../../../../model/raza-interface';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { RazaService } from '../../../../../../service/raza.service';
declare let bootstrap: any;

@Component({
  selector: 'app-raza-edit-admin-routed',
  templateUrl: './raza-edit-admin-routed.component.html',
  styleUrls: ['./raza-edit-admin-routed.component.css'],
})
export class RazaEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oRaza: IRaza = null;
  oRazaForm: IRazaForm = null;
  oRazaSend: IRazaSend = null;
  oForm: FormGroup<IRazaForm>;
  // modal
  mimodal: string = 'miModal';
  myModal: any;
  modalTitle: string = '';
  modalContent: string = '';

  constructor(
    private oRouter: Router,
    private oFormBuilder: FormBuilder,
    private oActivatedRoute: ActivatedRoute,
    private oRazaService : RazaService
    ) {
      this.id = oActivatedRoute.snapshot.params['id'];
    }

  ngOnInit(): void {
    this.getOne();
  }

  getOne() {
    this.oRazaService.getOne(this.id).subscribe({
        next: (data: IRaza) => {
            this.oRaza = data;
            console.log(data);

            this.oForm = <FormGroup>this.oFormBuilder.group({
                id: [data.id, [Validators.required]],
                nombre: [data.nombre,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
                tamanyo: [data.tamanyo,[Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
            });
        },
    });
}

onSubmit() {
    console.log('onSubmit');
    this.oRazaSend = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre,
        tamanyo: this.oForm.value.tamanyo
    };

    if (this.oForm.valid) {
        console.log('is valid');
        this.oRazaService
            .updateOne(this.oRazaSend)
            .subscribe({
                next: (data: number) => {
                    //open bootstrap modal here
                    this.modalTitle = 'dogFriends';
                    this.modalContent =
                        'Raza de perro ' + this.id + ' actualizado';
                    this.showModal();
                },
            });
    }
}

showModal = () => {
    this.myModal = new bootstrap.Modal(
        document.getElementById(this.mimodal),
        {
            //pasar el myModal como parametro
            keyboard: false,
        }
    );
    var myModalEl = document.getElementById(this.mimodal);
    myModalEl.addEventListener('hidden.bs.modal', (event): void => {
        this.oRouter.navigate(['/admin/raza/view', this.id]);
    });
    this.myModal.show();
};



}

  


