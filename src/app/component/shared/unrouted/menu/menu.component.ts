import { Component, OnInit } from '@angular/core';
import { Events, SessionService } from 'src/app/service/session.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  strUserName: string = "";
  strUserType: string = "";

  constructor(
    private oSessionService: SessionService,
  ) {
    this.strUserName = oSessionService.getUserName();
    this.strUserType = oSessionService.getUsertype();
    console.log(this.strUserType)
  }

  ngOnInit() {
    this.oSessionService.on(Events.login).subscribe(
      (data: string) => {
        this.strUserName = this.oSessionService.getUserName();
      });

    this.oSessionService.on(Events.logout).subscribe(
      (data: string) => {
        this.strUserName = '';
      });

  }
}


