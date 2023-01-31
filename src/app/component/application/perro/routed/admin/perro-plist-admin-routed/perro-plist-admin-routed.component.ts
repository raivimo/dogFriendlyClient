import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { IPerro } from 'src/app/model/perro-interface';
import { PerroService } from 'src/app/service/perro.service';

@Component({
  selector: 'app-perro-plist-admin-routed',
  templateUrl: './perro-plist-admin-routed.component.html',
  styleUrls: ['./perro-plist-admin-routed.component.css']
})
export class PerroPlistAdminRoutedComponent implements OnInit {
  
  responseFromServer: IPage<IPerro>;
  //
  strTermFilter: string = "";

  id_UsuarioFilter: number = 0;
  id_RazaFilter: number = 0;

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
    private oPerroService: PerroService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oPerroService.getPerrosPlist(this.page, this.numberOfElements, this.strTermFilter, this.id_UsuarioFilter, this.id_RazaFilter, this.sortField, this.sortDirection)
      .subscribe({
        next: (resp: IPage<IPerro>) => {
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
    this.id_UsuarioFilter = id;
    this.getPage();
  }
  setFilterByRaza(id: number): void {
    this.id_RazaFilter = id;
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
