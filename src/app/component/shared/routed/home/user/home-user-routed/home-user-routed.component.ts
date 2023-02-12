import { Component, OnInit } from '@angular/core';
import { Events, SessionService } from 'src/app/service/session.service';
import { IUser } from '../../../../../../model/session-interface';

@Component({
  selector: 'app-home-user-routed',
  templateUrl: './home-user-routed.component.html',
  styleUrls: ['./home-user-routed.component.css']
})
export class HomeUserRoutedComponent implements OnInit {

  strUserName: string = "";

  id_sesion: number;
  oUsuario: IUser = null;


  constructor(
    private oSessionService: SessionService
  ) {
    this.strUserName = oSessionService.getUserName();
    if(this.strUserName){
      this.oSessionService.getUserId().subscribe({
        next: (n: number) => {
          this.id_sesion = n
        }
      })
   }
  }

  ngOnInit(): void {
        this.oSessionService.on(
      Events.login, (data: any) => {
        this.strUserName = this.oSessionService.getUserName();
      });
    this.oSessionService.on(
      Events.logout, (data: any) => {
        this.strUserName = '';
      });
  }


  




}


