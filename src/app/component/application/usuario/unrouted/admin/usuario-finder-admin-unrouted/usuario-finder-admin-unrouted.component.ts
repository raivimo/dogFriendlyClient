import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { IUsuario } from 'src/app/model/usuario-interface';
import { UsuarioService } from 'src/app/service/usuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IPage } from 'src/app/model/generic-types-interface';

@Component({
  selector: 'app-usuario-finder-admin-unrouted',
  templateUrl: './usuario-finder-admin-unrouted.component.html',
  styleUrls: ['./usuario-finder-admin-unrouted.component.css']
})
export class UsuarioFinderAdminUnroutedComponent implements OnInit {
  
  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IUsuario>;
  //
  id_tipousuario: number = 0;
  strTermFilter: string = "";
  numberOfElements: number = 5;
  pageSize: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";
  //
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;


  constructor(
    private oUsuarioService:UsuarioService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage(){
    this.oUsuarioService.getUsuariosPlist(this.page, this.numberOfElements, this.strTermFilter,this.id_tipousuario, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp :IPage<IUsuario>) =>{
        this.responseFromServer = resp;
          if (this.page > resp.totalPages - 1) {
            this.page = resp.totalPages - 1;
            this.getPage();
          }},
      error: (err: HttpErrorResponse) =>{
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

  setOrder(order: string): void {
    this.sortField = order;
    if (this.sortDirection == "asc") {
      this.sortDirection = "desc";
    } else {
      this.sortDirection = "asc";
    }
    this.getPage();
  }

  selectionTipousuario(id: number): void {
    this.closeEvent.emit(id);
  }




}
