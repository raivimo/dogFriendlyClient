import { HttpClient, HttpParams } from "@angular/common/http";
import { EventEmitter, Injectable } from "@angular/core";
import { baseURL, httpOptions } from "src/environments/environment";
import { IPaseo, IPaseoSend } from '../model/paseo-interface';
import { IPage } from '../model/generic-types-interface';
import { Observable } from "rxjs";

export class EmitEvent {
  constructor( public oPaseoActualizado: IPaseo) { }
}

@Injectable({
  providedIn: 'root'
})

export class PaseoService {

  private entityURL = '/paseo';
  url: string = ""

  paseoObservable = new EventEmitter<IPaseo>(); 

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getPaseosPlist(page: number, size: number, termino: string, id_tipopaseo: number, id_usuario: number, id_perro: number, strSortField: string, strOrderDirection: string): Observable<IPage<IPaseo>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_tipopaseo != 0) {
      params = params.set("tipopaseo", id_tipopaseo);
    }
    if (id_usuario != 0) {
      params = params.set("usuario", id_usuario);
    }
    if (id_perro != 0) {
      params = params.set("perro", id_perro);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    const { withCredentials, headers } = httpOptions
    return this.oHttp.get<IPage<IPaseo>>(this.url, { headers: headers, withCredentials, params: params });
  }


  getPaseosDuenyosMascotas(id_usuario: number): Observable<IPaseo> {
    let params = new HttpParams()
    if (id_usuario != 0){
      params = params.set("usuario", id_usuario);
    }
    const { withCredentials, headers } = httpOptions
    return this.oHttp.get<IPaseo>(this.url + "/paseosDuenyo",  { headers: headers, withCredentials, params: params });
  }

  getOne(id: number): Observable<IPaseo> {
    return this.oHttp.get<IPaseo>(this.url + "/" + id, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id, httpOptions);
  }

  updateOne(oPaseoSend: IPaseoSend): Observable<number> {
    return this.oHttp.put<number>(this.url, oPaseoSend, httpOptions);
  }


  newOne(oPaseoSend: IPaseoSend): Observable<number> {
    return this.oHttp.post<number>(this.url, oPaseoSend, httpOptions);
  }

  newList(oPaseoSendLista: IPaseoSend [] ): Observable<number> {
    return this.oHttp.post<number>(this.url + "/multiplesPaseos", oPaseoSendLista, httpOptions);
  }


}