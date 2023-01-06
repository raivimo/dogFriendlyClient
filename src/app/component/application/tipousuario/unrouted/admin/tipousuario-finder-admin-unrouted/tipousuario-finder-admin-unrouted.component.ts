import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ITipousuario, TipousuarioResponse } from '../../../../../../model/tipousuario-response-interface';
import { faEye, faTrash, faUserPen } from '@fortawesome/free-solid-svg-icons';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-tipousuario-finder-admin-unrouted',
  templateUrl: './tipousuario-finder-admin-unrouted.component.html',
  styleUrls: ['./tipousuario-finder-admin-unrouted.component.css']
})
export class TipousuarioFinderAdminUnroutedComponent implements OnInit {

  @Output() closeEvent = new EventEmitter<number>();

  private pListContent!: ITipousuario[];
  private pagesCount!: number;
  private numberPage: number = 0;
  private pageRegister: number = 5;
  private termino: string = "";
  id_tipousuario: number = 0;

  faEye = faEye;
  faUserPen = faUserPen;
  faTrash = faTrash;


  constructor(
    private oTipousuarioService: TipousuarioService
  ) { }

  ngOnInit(): void {
    this.getPage();
  }

  getPage() {
    this.oTipousuarioService.getTipousuarioPlist(this.numberPage, this.pageRegister, this.termino, this.id_tipousuario)
      .subscribe({
        next: (resp: TipousuarioResponse) => {
          this.pListContent = resp.content;
          this.pagesCount = resp.totalPages;
          this.numberPage = resp.number;
        },
        error: (err: HttpErrorResponse) => {
          console.log(err);
        }
      })
  }

  getPageNumber(): number {
    return this.numberPage;
  }

  getPlistContent(): ITipousuario[] {
    return this.pListContent;
  }

  getpagesCount(): number {
    return this.pagesCount;
  }

  setPage(e: number) {
    this.numberPage = e - 1;
    this.getPage();
  }

  getPageRegister(): number {
    return this.pageRegister;
  }

  setRpp(registerPage: number) {
    this.pageRegister = registerPage;
    this.getPage();
  }

  setFilter(termino: string): void {
    this.termino = termino;
    this.numberPage = 0;
    this.getPage();
  }

  filterByUsertype(id: number): void {
    this.id_tipousuario = id;
    this.numberPage = 0;
    this.getPage();
  }

  selectionTipousuario(id: number): void {
    this.closeEvent.emit(id);
  }












}
