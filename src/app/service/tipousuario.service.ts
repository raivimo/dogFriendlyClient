import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { TipousuarioResponse, ITipousuario } from '../model/tipousuario-response-interface';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  constructor( private oHttp : HttpClient ) { }

  private entityURL: string = "/tipousuario";


  getTipousuarioPlist(page: number, size: number, termino:string, id_tipousuario:number):  Observable<TipousuarioResponse>{
    let params = new HttpParams()
    .set("filter", termino)
    .set("page", page)
    .set("size", size);
    if (id_tipousuario != 0) {
      params = params.set("TipoUsuario", id_tipousuario);
    }

    const url : string = `${baseURL}${this.entityURL}`;
    return this.oHttp.get<TipousuarioResponse>(url,{params: params});
  }

  getOne(id: number): Observable<ITipousuario> {    
    return this.oHttp.get<ITipousuario>(`${baseURL}${this.entityURL}` + "/" + id);
  }
}
