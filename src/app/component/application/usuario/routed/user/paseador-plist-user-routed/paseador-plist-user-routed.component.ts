import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { SessionService } from 'src/app/service/session.service';
declare let bootstrap: any;

@Component({
  selector: 'app-paseador-plist-user-routed',
  templateUrl: './paseador-plist-user-routed.component.html',
  styleUrls: ['./paseador-plist-user-routed.component.css']
})
export class PaseadorPlistUserRoutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();
  id_paseador: number = 0;
  oUsuario: IUsuario;
  
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  perroDescription: string = "";
  responseFromServer: IPage<IUsuario>;
  //
  strTermFilter: string = "";
  id_tipousuarioFilter: number = 3;

  numberOfElements: number = 5;
  pageSize: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  //

  constructor(
    private oUsuarioService: UsuarioService,
  ) { this.responseFromServer = {} as IPage<IUsuario>,
      this.oUsuario = {} as IUsuario }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oUsuarioService.getUsuariosPlist(this.page, this.numberOfElements, this.strTermFilter, this.id_tipousuarioFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IUsuario>) => {
          this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
            this.getPage();
          }
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  setPage(e: number) {
    this.page = (e - 1);
    this.getPage();
  }

  setFilterByTipousuario(id: number): void {
    this.id_tipousuarioFilter = id;
    this.getPage();
  }


  openModalNewPaseo(id_paseador: number){
    this.closeEvent.emit(this.id_paseador);
    this.id_paseador=id_paseador;
    this.myModal = new bootstrap.Modal(document.getElementById("newPaseo"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
    /* console.log(id_paseador); */
  }

  closeNewPaseoModal(): void {
    this.myModal.hide();
  }












}
