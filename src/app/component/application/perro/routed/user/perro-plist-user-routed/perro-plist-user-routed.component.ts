import { HttpErrorResponse } from '@angular/common/http';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { faEye, faUserPen, faTrash, faArrowUp, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { IPage } from 'src/app/model/generic-types-interface';
import { IPerro } from 'src/app/model/perro-interface';
import { IUsuario } from 'src/app/model/usuario-interface';
import { PerroService } from 'src/app/service/perro.service';

declare let bootstrap: any;

@Component({
  selector: 'app-perro-plist-user-routed',
  templateUrl: './perro-plist-user-routed.component.html',
  styleUrls: ['./perro-plist-user-routed.component.css']
})
export class PerroPlistUserRoutedComponent implements OnInit {

  @Input() oUsuario: IUsuario;
  @Output() closeEvent = new EventEmitter<number>();
  responseFromServer: IPage<IPerro>;

  //
  strTermFilter: string = "";

  id_UsuarioFilter: number = 0;
  id_RazaFilter: number = 0;
  id_perro: number = 0;


  numberOfElements: number = 5;
  pageSize: number = 5;
  page: number = 0;
  sortField: string = "";
  sortDirection: string = "";

  mimodal: string = "miModal";
  myModal: any;
  modalTitle: string = "";
  modalContent: string = "";

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;

  constructor(
    private oPerroService: PerroService
  ) { this.responseFromServer = {} as IPage<IPerro> }

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



  openModalViewPerro(id_perro: number): void {
    this.closeEvent.emit(id_perro);
    this.id_perro = id_perro;
    this.myModal = new bootstrap.Modal(document.getElementById("viewPerro"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  openModalEditPerro(id_perro: number): void {
    this.closeEvent.emit(id_perro);
    this.id_perro=id_perro;
    this.myModal = new bootstrap.Modal(document.getElementById("editPerro"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  openModalRemovePerro(id_perro: number): void {
    this.closeEvent.emit(id_perro);
    this.id_perro = id_perro;
    this.myModal = new bootstrap.Modal(document.getElementById("removePerro"), { //pasar el myModal como parametro
      keyboard: false
    })
    this.myModal.show()
  }

  closeViewPerroModal(): void {
    this.myModal.hide();
  }

  closeEditPerroModal(): void {
    this.myModal.hide();
  }

  closeRemovePerroModal(): void {
    this.myModal.hide();
  }









}
