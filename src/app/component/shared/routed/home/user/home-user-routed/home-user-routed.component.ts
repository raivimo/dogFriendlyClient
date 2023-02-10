import { Component, OnInit } from '@angular/core';
import { Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-home-user-routed',
  templateUrl: './home-user-routed.component.html',
  styleUrls: ['./home-user-routed.component.css']
})
export class HomeUserRoutedComponent implements OnInit {

  strUserName: string = "";


  constructor(
    private oSessionService: SessionService
  ) {
    this.strUserName = oSessionService.getUserName();
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


