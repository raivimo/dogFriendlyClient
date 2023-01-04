import { IUsuario } from 'src/app/model/usuario-interface';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { UsuarioService } from 'src/app/service/usuario.service';

declare let bootstrap: any;

@Component({
  selector: 'app-usuario-delete-admin-routed',
  templateUrl: './usuario-remove-admin-routed.component.html',
  styleUrls: ['./usuario-remove-admin-routed.component.css']
})

export class UsuarioRemoveAdminRoutedComponent implements OnInit {

  id: number = 0;
  msg: string = "";

  constructor(
    protected oLocation: Location,
    private oActivatedRoute: ActivatedRoute,
    private oUsuarioService: UsuarioService,
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
  }

  ngOnInit(): void {
  }

  removeOne() {
    this.oUsuarioService.removeOne(this.id).subscribe({
      next: (data: number) => {
        this.msg = "Usuario " + this.id + " eliminado";
        const myModal = new bootstrap.Modal('#removeInfo', {
          keyboard: false
        })
        myModal.show();        
        this.oLocation.back();
      }
    })
  }

}
