import { Component, Input, OnInit } from '@angular/core';
import { ITime } from 'src/app/model/generic-types-interface';
import { ITipoUsuario } from 'src/app/model/tipousuario-response-interface';
import { TipousuarioService } from '../../../../../../service/tipousuario.service';
import { CryptoService } from 'src/app/service/crypto.service';

@Component({
  selector: 'app-tipousuario-detail-admin-unrouted',
  templateUrl: './tipousuario-detail-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-detail-admin-unrouted.component.css']
})
export class TipousuarioDetailAdminUnroutedComponent implements OnInit {

  @Input() id: number;
  oTipoUsuario: ITipoUsuario;

  constructor(
    private oTipoUsuarioService: TipousuarioService,
  ) {
  }

  ngOnInit(): void {
    this.getOne();
  }

  getOne(){
    this.oTipoUsuarioService.getOne(this.id).subscribe({
      next: (data: ITipoUsuario) => {
        this.oTipoUsuario = data;
      }
        
    })
  }

  changeID(ev) {
    this.id = ev.target.value;
  }


}
