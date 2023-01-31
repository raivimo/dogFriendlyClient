import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { baseURL, httpOptions } from "src/environments/environment";
import { IPage } from "../model/generic-types-interface";
import { IUsuario, IUsuario2Send } from "../model/usuario-interface";
import { IRaza, IRazaSend } from '../model/raza-interface';

@Injectable({
    providedIn: 'root'
  })

  export class RazaService {

    private entityURL = '/raza';
    url: string = ""
  
    constructor(private oHttp: HttpClient) {
      this.url = `${baseURL}${this.entityURL}`;
    }

    getRazasPlist(page: number, size: number, termino: string, strSortField: string, strOrderDirection: string): Observable<IPage<IRaza>> {
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
        return this.oHttp.get<IPage<IRaza>>(this.url, {headers: headers, withCredentials, params: params });
      }

      getOne(id: number): Observable<IRaza> {
        return this.oHttp.get<IRaza>(this.url + "/" + id, httpOptions);
      }
    
      removeOne(id: number): Observable<number> {
        return this.oHttp.delete<number>(this.url + '/' + id, httpOptions);
      }
    
      updateOne(oRazaSend: IRazaSend): Observable<number> {
        return this.oHttp.put<number>(this.url, oRazaSend, httpOptions);
      }
    
      newOne(oRazaSend: IRazaSend): Observable<number> {       
        return this.oHttp.post<number>(this.url, oRazaSend, httpOptions);
      }




  }