import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPerro } from 'src/app/model/perro-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { PerroService } from 'src/app/service/perro.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-perro-finder-admin-unrouted',
  templateUrl: './perro-finder-admin-unrouted.component.html',
  styleUrls: ['./perro-finder-admin-unrouted.component.css']
})
export class PerroFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IPerro>;

  strTermFilter: string = "";
  numberOfElements: number = 5;
  pageSize: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  id_usuario: number = 0;
  id_raza: number = 0;


  //
  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;
  faArrowUp = faArrowUp;
  faArrowDown = faArrowDown;

  constructor(
    private oPerroService : PerroService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage(){
    this.oPerroService.getPerrosPlist(this.page, this.numberOfElements, this.strTermFilter, this.id_usuario, this.id_raza, this.sortField, this.sortDirection)
    .subscribe({
      next: (resp :IPage<IPerro>) =>{
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

  selectionPerro(id: number): void {
    this.closeEvent.emit(id);
  }












}
