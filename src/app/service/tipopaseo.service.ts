import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseURL, httpOptions } from "src/environments/environment";
import { IPaseo, IPaseoSend } from '../model/paseo-interface';
import { IPage } from "../model/generic-types-interface";
import { Observable } from "rxjs";
import { ITipoPaseo, ITipoPaseoSend } from '../model/tipopaseo-interface';

@Injectable({
    providedIn: 'root'
  })
  
export class TipopaseoService {

    private entityURL = '/tipopaseo';
    url: string = ""

    constructor(private oHttp: HttpClient) {
        this.url = `${baseURL}${this.entityURL}`;
      }

    getTipopaseosPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<ITipoPaseo>> {
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
        return this.oHttp.get<IPage<ITipoPaseo>>(this.url, {headers: headers, withCredentials, params: params });
      }
    
    getOne(id: number): Observable<ITipoPaseo> {
        return this.oHttp.get<ITipoPaseo>(this.url + "/" + id, httpOptions);
      }
    
    removeOne(id: number): Observable<number> {
        return this.oHttp.delete<number>(this.url + '/' + id, httpOptions);
      }
    
    updateOne(oTipoPaseoSend: ITipoPaseoSend): Observable<number> {
        return this.oHttp.put<number>(this.url, oTipoPaseoSend, httpOptions);
      }
    
    
    newOne(oTipoPaseoSend: ITipoPaseoSend): Observable<number> {       
        return this.oHttp.post<number>(this.url, oTipoPaseoSend, httpOptions);
      }


}