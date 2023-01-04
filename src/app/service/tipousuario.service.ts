import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { TipousuarioResponse } from '../model/tipousuario-response-interface';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  constructor( private oHttp : HttpClient ) { }

  private entityURL: string = "/tipousuario";


  getTipousuarioPlist(page: number, size: number): Observable<TipousuarioResponse>{
    let params = new HttpParams()
    .set("page", page)
    .set("size", size);

    const url : string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<TipousuarioResponse>(url,{params: params});
  }
}
