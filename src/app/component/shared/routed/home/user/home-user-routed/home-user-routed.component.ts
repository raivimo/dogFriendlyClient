import { Component, OnInit } from '@angular/core';
import { EmitEvent, Events, SessionService } from 'src/app/service/session.service';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { RazaService } from 'src/app/service/raza.service';
import { PerroService } from 'src/app/service/perro.service';
import { Router } from '@angular/router';

declare let bootstrap: any;

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

  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  perroDescription: string = "";

  constructor(
    private oSessionService: SessionService,
    private oUsuarioService: UsuarioService,
    protected oRouter: Router,
  ) {
    this.strUsername = oSessionService.getUserName();
    this.getUserID();
  }

  ngOnInit() {
  }

  logout() {
    this.oSessionService.logout();
    this.oSessionService.emit(new EmitEvent(Events.logout, ""));
    this.oRouter.navigate(['/login']);
  }

  getUserID() {
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

  openModalNewPerro(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("newPerro"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  openModalRemovePerro(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("removePerro"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  openModalEditUser(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("editUser"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeNewPerroModal() {
    this.myModal.hide();
  }

  closeEditUserModal(): void {
    this.myModal.hide();
  }










}


