import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';
import { TipousuarioResponse, ITipoUsuario, ITipoUsuarioSend } from '../model/tipousuario-response-interface';
import { IPage } from '../model/generic-types-interface';

@Injectable({
  providedIn: 'root'
})
export class TipousuarioService {

  private entityURL: string = "/tipousuario";
  url: string = ""

  constructor( private oHttp : HttpClient ) { 
    this.url = `${baseURL}${this.entityURL}`;
  }

  getTipousuarioPlist(page: number, size: number, termino:string, strSortField: string, strOrderDirection: string):  Observable<IPage<ITipoUsuario>>{
    let params = new HttpParams()
    .set("filter", termino)
    .set("page", page)
    .set("size", size);
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    const { withCredentials, headers} = httpOptions
    return this.oHttp.get<IPage<ITipoUsuario>>(this.url, {headers: headers, withCredentials, params: params });
  }

  getOne(id: number): Observable<ITipoUsuario> {    
    return this.oHttp.get<ITipoUsuario>(`${baseURL}${this.entityURL}` + "/" + id);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id, httpOptions);
  }

  updateOne(oITipoUsuarioSend: ITipoUsuarioSend): Observable<number> {
    return this.oHttp.put<number>(this.url, oITipoUsuarioSend, httpOptions);
  }

  newOne(oTipoUsuarioSend: ITipoUsuarioSend): Observable<number> {       
    return this.oHttp.post<number>(this.url, oTipoUsuarioSend, httpOptions);
  }


}
