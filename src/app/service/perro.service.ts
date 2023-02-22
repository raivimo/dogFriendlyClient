import { HttpClient, HttpParams } from "@angular/common/http";
import { Observable } from "rxjs";
import { baseURL, httpOptions } from "src/environments/environment";
import { IPage } from "../model/generic-types-interface";
import { IPerro, IPerroSend } from '../model/perro-interface';
import { EventEmitter, Injectable } from "@angular/core";

export class EmitEvent {
  constructor( public oPerroActualizado: IPerro) { }
}

@Injectable({
  providedIn: 'root'
})

export class PerroService {

    private entityURL = '/perro';
    url: string = ""

     perroObervable = new EventEmitter<IPerro>(); 

  
    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }
  
    getPerrosPlist(page: number, size: number, termino: string, id_usuario: number, id_raza: number, strSortField: string, strOrderDirection: string): Observable<IPage<IPerro>> {
      let params = new HttpParams()
        .set("filter", termino)
        .set("page", page)
        .set("size", size);
      if (id_usuario != 0) {
        params = params.set("usuario", id_usuario);
      }
      if (id_raza != 0) {
        params = params.set("raza", id_raza);
      }
      if (strSortField != "") { //&sort=codigo,[asc|desc]
        if (strOrderDirection != "") {
          params = params.set("sort", strSortField + "," + strOrderDirection);
        } else {
          params = params.set("sort", strSortField);
        }
      }
      const { withCredentials, headers} = httpOptions
      return this.oHttp.get<IPage<IPerro>>(this.url, {headers: headers, withCredentials, params: params });
    }
  
    getOne(id: number): Observable<IPerro> {
      return this.oHttp.get<IPerro>(this.url + "/" + id, httpOptions);
    }
  
    removeOne(id: number): Observable<number> {
      return this.oHttp.delete<number>(this.url + '/' + id, httpOptions);
    }
  
    updateOne(oPerroSend: IPerroSend): Observable<number> {
      return this.oHttp.put<number>(this.url, oPerroSend, httpOptions);
    }
  
    newOne(oPerroSend: IPerroSend): Observable<number> {       
      return this.oHttp.post<number>(this.url, oPerroSend, httpOptions);
    }
  
  }
  