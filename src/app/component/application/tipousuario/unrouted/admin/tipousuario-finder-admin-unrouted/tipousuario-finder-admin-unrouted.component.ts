import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITipoUsuario, TipousuarioResponse } from '../../../../../../model/tipousuario-response-interface';
import { faArrowDown, faArrowUp, faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { HttpErrorResponse } from '@angular/common/http';
import { IPage } from 'src/app/model/generic-types-interface';

@Component({
  selector: 'app-tipousuario-finder-admin-unrouted',
  templateUrl: './tipousuario-finder-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-finder-admin-unrouted.component.css']
})
export class TipousuarioFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<ITipoUsuario>;
  //
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
    private oTipousuarioService: TipousuarioService
  ) { this.responseFromServer = {} as IPage<ITipoUsuario>}

  ngOnInit(): void {
    this.getPage();
  }

  getPage(){
    this.oTipousuarioService.getTipousuarioPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp :IPage<ITipoUsuario>) =>{
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
