import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITipoPaseo } from '../../../../../model/tipopaseo-interface';
import { IPage } from 'src/app/model/generic-types-interface'
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { TipopaseoService } from '../../../../../service/tipopaseo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tipopaseo-finder-admin-unrouted',
  templateUrl: './tipopaseo-finder-admin-unrouted.component.html',
  styleUrls: ['./tipopaseo-finder-admin-unrouted.component.css']
})
export class TipopaseoFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<ITipoPaseo>;

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
    private oTipoPaseoService: TipopaseoService
  ) { this.responseFromServer = {} as IPage<ITipoPaseo>}

  ngOnInit(): void {
    this.getPage();
  }

  getPage(){
    this.oTipoPaseoService.getTipopaseosPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp :IPage<ITipoPaseo>) =>{
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

  selectionTipoPaseo(id: number): void {
    this.closeEvent.emit(id);
  }




}
