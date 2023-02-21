import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import { IRaza } from '../../../../../../model/raza-interface';
import { RazaService } from '../../../../../../service/raza.service';
import { IPage } from 'src/app/model/generic-types-interface';

@Component({
  selector: 'app-raza-finder-admin-unrouted',
  templateUrl: './raza-finder-admin-unrouted.component.html',
  styleUrls: ['./raza-finder-admin-unrouted.component.css']
})
export class RazaFinderAdminUnroutedComponent implements OnInit {
  
  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IRaza>;
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
    private oRazaService : RazaService
  ) { this.responseFromServer = {} as IPage<IRaza> }

  ngOnInit(): void {
    this.getPage();
  }

  getPage(){
    this.oRazaService.getRazasPlist(this.page, this.numberOfElements, this.strTermFilter, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp :IPage<IRaza>) =>{
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

  selectionRaza(id: number): void {
    this.closeEvent.emit(id);
  }




}



