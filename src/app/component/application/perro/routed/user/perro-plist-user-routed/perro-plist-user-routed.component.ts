import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPage } from 'src/app/model/generic-types-interface';
import { IPerro } from 'src/app/model/perro-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { PerroService } from 'src/app/service/perro.service';

@Component({
  selector: 'app-perro-plist-user-routed',
  templateUrl: './perro-plist-user-routed.component.html',
  styleUrls: ['./perro-plist-user-routed.component.css']
})
export class PerroPlistUserRoutedComponent implements OnInit {

  @Input() oUsuario:IUsuario;
  @Output() closeEvent = new EventEmitter<number>();
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

  constructor(
    private oPerroService: PerroService,
  ) {  }

  ngOnInit(): void {
    this.id_UsuarioFilter = this.oUsuario.id;
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


  setFilterByRaza(id: number): void {
    this.id_RazaFilter = id;
    this.getPage();
  }





}
