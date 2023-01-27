import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

declare let bootstrap: any;

@Component({
  selector: 'app-tipousuario-remove-admin-routed',
  templateUrl: './tipousuario-remove-admin-routed.component.html',
  styleUrls: ['./tipousuario-remove-admin-routed.component.css']
})
export class TipousuarioRemoveAdminRoutedComponent implements OnInit {


  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oTipoUsuarioService: TipousuarioService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oTipoUsuarioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Tipo de Usuario " + this.id + " eliminado";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();
        this.oLocation.back();
      }
    })
  }

}
