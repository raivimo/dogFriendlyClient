import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Tipousuario, TipousuarioResponse } from 'src/app/model/tipousuario-response-interface';
import { TipousuarioService } from 'src/app/service/tipousuario.service';

@Component({
  selector: 'app-tipousuario-plist-admin-routed',
  templateUrl: './tipousuario-plist-admin-routed.component.html',
  styleUrls: ['./tipousuario-plist-admin-routed.component.css']
})
export class TipousuarioPlistAdminRoutedComponent implements OnInit {

  constructor( private oTipousuarioService: TipousuarioService  ) { }

  private pListContent!: Tipousuario[];
  private pagesCount!: number;
  private numberPage : number= 0;
  private pageRegister: number = 5;

  ngOnInit(): void {
    this.getPlist();
  }

  getPlist(){
    this.oTipousuarioService.getTipousuarioPlist(this.numberPage, this.pageRegister)
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

  getPlistContent(): Tipousuario[]{
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
