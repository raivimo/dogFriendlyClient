import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITipoPaseo, ITipoPaseoSend, ITipoPaseoForm } from 'src/app/model/tipopaseo-interface';
import { TipopaseoService } from 'src/app/service/tipopaseo.service';
declare let bootstrap: any;

@Component({
  selector: 'app-tipopaseo-edit-admin-routed',
  templateUrl: './tipopaseo-edit-admin-routed.component.html',
  styleUrls: ['./tipopaseo-edit-admin-routed.component.css']
})
export class TipopaseoEditAdminRoutedComponent implements OnInit {

  id: number = 0;
  oTipoPaseo: ITipoPaseo = null;
  oTipoPaseoSend: ITipoPaseoSend = null;
  oTipoPaseoForm: ITipoPaseoForm = null;
  oForm: FormGroup<ITipoPaseoForm>;
  // modal
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  constructor(
    private oRouter: Router,
    private oActivatedRoute: ActivatedRoute,
    private oFormBuilder: FormBuilder,
    private oTipoPaseoService: TipopaseoService
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

  ngOnInit():void {
    this.getOne();
  }
  
  getOne() {
    this.oTipoPaseoService.getOne(this.id).subscribe({
        next: (data: ITipoPaseo) => {
            this.oTipoPaseo = data;
            console.log(data);

            this.oForm = <FormGroup>this.oFormBuilder.group({
                id: [data.id, [Validators.required]],
                nombre: [data.nombre,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]],
                duracion: [data.duracion,[Validators.required,Validators.minLength(3),Validators.maxLength(10)]]
            });
        },
    });
}

onSubmit() {
    console.log('onSubmit');
    this.oTipoPaseoSend = {
        id: this.oForm.value.id,
        nombre: this.oForm.value.nombre,
        duracion: this.oForm.value.duracion
    };

    if (this.oForm.valid) {
        console.log('is valid');
        this.oTipoPaseoService
            .updateOne(this.oTipoPaseoSend)
            .subscribe({
                next: (data: number) => {
                    //open bootstrap modal here
                    this.modalTitle = 'dogFriends';
                    this.modalContent =
                        'Tipo de Paseo ' + this.id + ' actualizado';
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
        this.oRouter.navigate(['/admin/tipopaseo/view', this.id]);
    });
    this.myModal.show();
};


}
