import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPaseo } from 'src/app/model/paseo-interface';
import { PaseoService } from '../../../../../service/paseo.service';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from '../../../../../../../../wildCartAngularClient2021/src/app/model/model-interfaces';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-paseo-finder-admin-unrouted',
  templateUrl: './paseo-finder-admin-unrouted.component.html',
  styleUrls: ['./paseo-finder-admin-unrouted.component.css']
})
export class PaseoFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IPaseo>;

  id_TipoPaseo: number = 0;
  id_usuario: number = 0;
  id_perro: number = 0;

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
    private oPaseoService : PaseoService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage(){
    this.oPaseoService.getPaseosPlist(this.page, this.numberOfElements, this.strTermFilter,this.id_TipoPaseo, this.id_usuario, this.id_perro, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp :IPage<IPaseo>) =>{
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

  selectionFactura(id: number): void {
    this.closeEvent.emit(id);
  }






}
