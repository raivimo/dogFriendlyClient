import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ITipousuario, TipousuarioResponse } from 'src/app/model/tipousuario-response-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';
import { filter } from 'rxjs';

@Component({
  selector: 'app-tipousuario-plist-admin-routed',
  templateUrl: './tipousuario-plist-admin-routed.component.html',
  styleUrls: ['./tipousuario-plist-admin-routed.component.css']
})
export class TipousuarioPlistAdminRoutedComponent implements OnInit {

  constructor( private oTipousuarioService: TipousuarioService  ) { }

  private pListContent!: ITipousuario[];
  private pagesCount!: number;
  private numberPage : number= 0;
  private pageRegister: number = 5;
  private termino: string ="";
  id_tipousuario: number =0;

  ngOnInit(): void {
    this.getPlist();
  }

  getPlist(){
    this.oTipousuarioService.getTipousuarioPlist(this.numberPage, this.pageRegister, this.termino, this.id_tipousuario)
    .subscribe({
      next: (resp : TipousuarioResponse) =>{
        this.pListContent = resp.content;
        this.pagesCount = resp.totalPages;
      },
      error: (err: HttpErrorResponse) =>{
        console.log(err);
      }
    })
  }

  getPlistContent(): ITipousuario[]{
    return this.pListContent;
  }

  getpagesCount(): number{
    return this.pagesCount;
  }

  getNumberPage( e: number ){
    this.numberPage = e;
    this.getPlist();
  }

  getPageRegister():number{
    return this.pageRegister;
  }

  setPageRegister( registerPage: number ){
    this.pageRegister = registerPage;
    this.getPlist();
  }

}
