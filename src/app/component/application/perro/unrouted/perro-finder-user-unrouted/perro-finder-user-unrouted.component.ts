import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPerro } from 'src/app/model/perro-interface';
import { PerroService } from 'src/app/service/perro.service';
import { IUsuario } from 'src/app/model/usuario-interface';
import { SessionService } from 'src/app/service/session.service';
import { UsuarioService } from 'src/app/service/usuario.service';
import { IPage } from 'src/app/model/generic-types-interface';

@Component({
  selector: 'app-perro-finder-user-unrouted',
  templateUrl: './perro-finder-user-unrouted.component.html',
  styleUrls: ['./perro-finder-user-unrouted.component.css']
})
export class PerroFinderUserUnroutedComponent implements OnInit {

  oUsuario: IUsuario;
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
    private oSessionService: SessionService,
    private oUsuarioService: UsuarioService
  ) { 
    this.getUserID()
    }

  ngOnInit(): void {
    this.oPerroService.perroObervable.subscribe({
      next: (data ) => {
        this.getPage();
      }
    })
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

  selectionPerro(id: number): void {
    this.closeEvent.emit(id);
  }

  async getUserID() {
    this.oSessionService.getUserId().subscribe({
      next: (n: number) => {
        this.id_UsuarioFilter = n
        this.getUser()
      }
    })
  }


  getUser() {
    this.oUsuarioService.getOne(this.id_UsuarioFilter).subscribe({
      next: (data: IUsuario) => {
        this.oUsuario = data;
      }
    })
  }

}
