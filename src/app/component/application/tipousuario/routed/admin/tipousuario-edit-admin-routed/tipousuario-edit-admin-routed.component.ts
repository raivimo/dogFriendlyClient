import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ITipoUsuario, ITipoUsuarioForm, ITipoUsuarioSend } from 'src/app/model/tipousuario-response-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

declare let bootstrap: any;
@Component({
    selector: 'app-tipousuario-edit-admin-routed',
    templateUrl: './tipousuario-edit-admin-routed.component.html',
    styleUrls: ['./tipousuario-edit-admin-routed.component.css'],
})
export class TipousuarioEditAdminRoutedComponent implements OnInit {
    
    id: number = 0;
    oTipoUsuario: ITipoUsuario = null;
    oTipoUsuarioForm: ITipoUsuarioForm = null;
    oTipoUsuarioSend: ITipoUsuarioSend = null;
    oForm: FormGroup<ITipoUsuarioForm>;
    // modal
    mimodal: string = 'miModal';
    myModal: any;
    modalTitle: string = '';
    modalContent: string = '';

    constructor(
        private oRouter: Router,
        private oActivatedRoute: ActivatedRoute,
        private oFormBuilder: FormBuilder,
        private oTipousuarioService: TipousuarioService
    ) {
        this.id = oActivatedRoute.snapshot.params['id'];
    }

    ngOnInit(): void {
        this.getOne();
    }

    getOne() {
        this.oTipousuarioService.getOne(this.id).subscribe({
            next: (data: ITipoUsuario) => {
                this.oTipoUsuario = data;
                console.log(data);

                this.oForm = <FormGroup>this.oFormBuilder.group({
                    id: [data.id, [Validators.required]],
                    nombre: [
                        data.nombre,
                        [
                            Validators.required,
                            Validators.minLength(3),
                            Validators.maxLength(10),
                        ],
                    ],
                });
            },
        });
    }

    onSubmit() {
        console.log('onSubmit');
        this.oTipoUsuarioSend = {
            id: this.oForm.value.id,
            nombre: this.oForm.value.nombre,
        };

        if (this.oForm.valid) {
            console.log('is valid');
            this.oTipousuarioService
                .updateOne(this.oTipoUsuarioSend)
                .subscribe({
                    next: (data: number) => {
                        //open bootstrap modal here
                        this.modalTitle = 'dogFriends';
                        this.modalContent =
                            'Tipo de Usuario ' + this.id + ' actualizado';
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
            this.oRouter.navigate(['/admin/tipousuario/view', this.id]);
        });
        this.myModal.show();
    };
}
