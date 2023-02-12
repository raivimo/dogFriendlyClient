import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})


export class CountService {
  constructor(private http: HttpClient) { }

    getCountPerros(): Observable<number> {
      return this.http.get<number>(baseURL + '/perro/count', httpOptions);
    }

  getCountUsuarios(): Observable<number> {
    return this.http.get<number>(baseURL + '/usuario/count', httpOptions);
  }

  getCountTiposUsuario(): Observable<number> {
    return this.http.get<number>(baseURL + '/tipousuario/count', httpOptions);
  }


  getCountTiposPaseo(): Observable<number> {
    return this.http.get<number>(baseURL + '/tipopaseo/count', httpOptions);
  }

  getCountPaseos(): Observable<number> {
    return this.http.get<number>(baseURL + '/paseo/count', httpOptions);
  }

  getCountFacturas(): Observable<number> {
    return this.http.get<number>(baseURL + '/factura/count', httpOptions);
  }

  getCountRazas(): Observable<number> {
    return this.http.get<number>(baseURL + '/raza/count', httpOptions);
  } 

}
