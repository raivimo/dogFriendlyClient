import { Component, OnInit } from '@angular/core';
import { Events, SessionService } from 'src/app/service/session.service';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { async, waitForAsync } from '@angular/core/testing';

@Component({
  selector: 'app-home-user-routed',
  templateUrl: './home-user-routed.component.html',
  styleUrls: ['./home-user-routed.component.css']
})
export class HomeUserRoutedComponent implements OnInit {

  strId: number = null;
  strUsername: string = "";
  strUsertype: string = "";

  oUsuario: IUsuario = null;

  constructor(
    private oSessionService: SessionService,
    private oUsuarioService: UsuarioService,
  ) {
    this.strUsername = oSessionService.getUserName();
    if (this.strUsername) {
      this.getUserID();
    }
  }

  ngOnInit() {
  }


  async getUserID() {
    this.oSessionService.getUserId().subscribe({
      next: (n: number) => {
        this.strId = n
        this.getUser()
      }
    })
  }


  getUser() {
    this.oUsuarioService.getOne(this.strId).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
      }
    })
  }









}


