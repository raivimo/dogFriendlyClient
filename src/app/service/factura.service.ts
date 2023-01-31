import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { baseURL, httpOptions } from "src/environments/environment";
import { IPaseo, IPaseoSend } from '../model/paseo-interface';
import { IPage } from "../model/generic-types-interface";
import { Observable } from "rxjs";
import { IFactura, IFacturaSend } from '../model/factura-interface';

@Injectable({
    providedIn: 'root'
  })
  
export class FacturaService {

    private entityURL = '/factura';
    url: string = ""

    constructor(private oHttp: HttpClient) {
        this.url = `${baseURL}${this.entityURL}`;
      }

    getFacturasPlist(page: number, size: number, termino: string, id_paseo: number, strSortField: string, strOrderDirection: string): Observable<IPage<IFactura>> {
        let params = new HttpParams()
          .set("filter", termino)
          .set("page", page)
          .set("size", size);
        if (id_paseo != 0) {
          params = params.set("paseo", id_paseo);
        }
        if (strSortField != "") { //&sort=codigo,[asc|desc]
          if (strOrderDirection != "") {
            params = params.set("sort", strSortField + "," + strOrderDirection);
          } else {
            params = params.set("sort", strSortField);
          }
        }
        const { withCredentials, headers} = httpOptions
        return this.oHttp.get<IPage<IFactura>>(this.url, {headers: headers, withCredentials, params: params });
      }
    
    getOne(id: number): Observable<IFactura> {
        return this.oHttp.get<IFactura>(this.url + "/" + id, httpOptions);
      }
    
    removeOne(id: number): Observable<number> {
        return this.oHttp.delete<number>(this.url + '/' + id, httpOptions);
      }
    
    updateOne(oFacturaSend: IFacturaSend): Observable<number> {
        return this.oHttp.put<number>(this.url, oFacturaSend, httpOptions);
      }
    
    
    newOne(oFacturaSend: IFacturaSend): Observable<number> {       
        return this.oHttp.post<number>(this.url, oFacturaSend, httpOptions);
      }


}