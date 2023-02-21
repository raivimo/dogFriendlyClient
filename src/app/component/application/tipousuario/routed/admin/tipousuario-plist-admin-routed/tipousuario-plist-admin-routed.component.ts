import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITipoUsuario, TipousuarioResponse } from 'src/app/model/tipousuario-response-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { filter } from 'rxjs';
import { IPage } from 'src/app/model/generic-types-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-tipousuario-plist-admin-routed',
  templateUrl: './tipousuario-plist-admin-routed.component.html',
  styleUrls: ['./tipousuario-plist-admin-routed.component.css']
})
export class TipousuarioPlistAdminRoutedComponent implements OnInit {

  constructor( private oTipousuarioService: TipousuarioService ) {
    this.responseFromServer = {} as IPage<ITipoUsuario>;
   }

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

}
