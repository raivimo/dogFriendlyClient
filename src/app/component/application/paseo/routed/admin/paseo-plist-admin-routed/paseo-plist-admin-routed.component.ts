import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IPaseo } from '../../../../../../model/paseo-interface';
import { IPage } from 'src/app/model/generic-types-interface';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { PaseoService } from '../../../../../../service/paseo.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-paseo-plist-admin-routed',
  templateUrl: './paseo-plist-admin-routed.component.html',
  styleUrls: ['./paseo-plist-admin-routed.component.css']
})
export class PaseoPlistAdminRoutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IPaseo>;
  //
  strTermFilter: string = "";
  
  id_usuarioFilter: number = 0;
  id_tipopaseoFilter: number = 0;
  id_perroFilter: number = 0;

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
  getPage() {
    this.oPaseoService.getPaseosPlist(this.page, this.numberOfElements, this.strTermFilter, this.id_tipopaseoFilter, this.id_usuarioFilter, this.id_perroFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IPaseo>) => {
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

  setFilterByUsuario(id: number): void {
    this.id_usuarioFilter = id;
    this.getPage();
  }
  setFilterByPerro(id: number): void {
    this.id_perroFilter = id;
    this.getPage();
  }

  setFilterByTipopaseo(id: number): void {
    this.id_tipopaseoFilter = id;
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
