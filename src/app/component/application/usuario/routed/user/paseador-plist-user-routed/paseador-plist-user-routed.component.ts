import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
declare let bootstrap: any;

@Component({
  selector: 'app-paseador-plist-user-routed',
  templateUrl: './paseador-plist-user-routed.component.html',
  styleUrls: ['./paseador-plist-user-routed.component.css']
})
export class PaseadorPlistUserRoutedComponent implements OnInit {

  
  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  perroDescription: string = "";

  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IUsuario>;
  //
  strTermFilter: string = "";

  id_tipousuarioFilter: number = 3;

  numberOfElements: number = 4;
  pageSize: number = 4;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  //

  constructor(
    private oUsuarioService: UsuarioService
  ) { }

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

  setRpp(rpp: number) {
    this.numberOfElements = rpp;
    this.page = 0;
    this.getPage();

  }

  setFilter(term: string): void {
    this.strTermFilter = term;
    this.getPage();
  }

  setFilterByTipousuario(id: number): void {
    this.id_tipousuarioFilter = id;
    this.getPage();
  }

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

  openModalNewPaseo(){
    this.myModal = new bootstrap.Modal(document.getElementById("newPaseo"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeNewPaseoModal(): void {
    this.myModal = new bootstrap.Modal(document.getElementById("editUser"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }


}
