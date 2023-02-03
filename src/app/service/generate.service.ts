import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})


export class GenerateService {
  constructor(private http: HttpClient) { }  

  generateTiposPaseo(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/tipopaseo/generate/' + n, { amount: n }, httpOptions);
  }

  generateUsuarios(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/usuario/generate/' + n, { amount: n }, httpOptions);
  }

  generateTiposDeUsuario(n:number): Observable<number> {
    return this.http.post<number>(baseURL + '/tipousuario/generate', "", httpOptions);
  }


  generatePaseos(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/paseo/generate/' + n, { amount: n }, httpOptions);
  }

  generateFacturas(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/factura/generate/' + n, { amount: n }, httpOptions);
  }

  generateRazas(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/raza/generate/' + n, { amount: n }, httpOptions);
  }

  generatePerros(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/perro/generate/' + n, { amount: n }, httpOptions);
  }

}
