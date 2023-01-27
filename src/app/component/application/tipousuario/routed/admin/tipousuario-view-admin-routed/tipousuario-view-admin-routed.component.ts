import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ITipoUsuario } from 'src/app/model/tipousuario-response-interface';

@Component({
  selector: 'app-tipousuario-view-admin-routed',
  templateUrl: './tipousuario-view-admin-routed.component.html',
  styleUrls: ['./tipousuario-view-admin-routed.component.css']
})
export class TipousuarioViewAdminRoutedComponent implements OnInit {
  
  id: number = 0;
  oTipoUsuario: ITipoUsuario = null;

  constructor(
    private oActivatedRoute: ActivatedRoute
  ) {
    this.id = oActivatedRoute.snapshot.params['id'];
   }

  ngOnInit(): void {
  }

}
