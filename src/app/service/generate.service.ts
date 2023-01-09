import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})


export class GenerateService {
  constructor(private http: HttpClient) { }  

/*   generateProductos(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/producto/generate/' + n, { amount: n }, httpOptions);
  } */

  generateUsuarios(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/usuario/generate/' + n, { amount: n }, httpOptions);
  }

  generateTiposDeUsuario(): Observable<number> {
    return this.http.post<number>(baseURL + '/tipousuario/generate', "", httpOptions);
  }

/*
  generateTiposDeProductos(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/tipoproducto/generate/' + n, { amount: n }, httpOptions);
  }

  generateFacturas(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/factura/generate/' + n, { amount: n }, httpOptions);
  }

  generateCompras(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/compra/generate/' + n, { amount: n }, httpOptions);
  }

  generateCarritos(n: number): Observable<number> {
    return this.http.post<number>(baseURL + '/carrito/generate/' + n, { amount: n }, httpOptions);
  } */

}
