import { Component, OnInit } from '@angular/core';
import { Events, SessionService } from 'src/app/service/session.service';
import {TabMenuModule} from 'primeng/tabmenu';
import {MenuItem} from 'primeng/api';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  strUserName: string = "";
  strUserType: string = "";
  items: MenuItem[];
  activeItem: MenuItem;

  constructor(
    private oSessionService: SessionService,
  ) {
    this.strUserName = oSessionService.getUserName();
    this.strUserType = oSessionService.getUsertype();
    console.log(this.strUserType)
  }

  ngOnInit() {
    this.login();
    this.logout();

    this.items = [
      {label: 'Home', icon: 'pi pi-fw pi-home', routerLink: "home/admin"},
      {label: 'Usuarios', icon: 'pi pi-fw pi-user-edit', routerLink: "admin/usuario/plist"},
      {label: 'Tipos de Usuario', icon: 'pi pi-fw pi-users', routerLink: "admin/tipousuario/plist"},
      {label: 'Perros', icon: 'fa-solid fa-dog', routerLink: "admin/perro/plist"},
      {label: 'Razas', icon: 'fa-solid fa-bone', routerLink: "admin/raza/plist"},
      {label: 'Tipos de Raza', icon:'fa-solid fa-paw', routerLink: "admin/tiporaza/plist"},
      {label: 'Paseos', icon: 'fa-solid fa-person-walking', routerLink: "admin/paseo/plist"},
      {label: 'Tipos de Paseo', icon: 'fa-solid fa-shoe-prints', routerLink: "admin/tipopaseo/plist"},
      {label: 'Salir', icon: 'fa-solid fa-right-from-bracket', routerLink: "logout"}
  ];
  this.activeItem = this.items[0];
}

login(){
  this.oSessionService.on(Events.login).subscribe(
    (data: string) => {
      this.strUserName = this.oSessionService.getUserName();
      this.strUserType = this.oSessionService.getUsertype();
    });
}

logout(){
  this.oSessionService.on(Events.logout).subscribe(
    (data: string) => {
      this.strUserName = '';
      this.strUserType = '';
    });
}





}


