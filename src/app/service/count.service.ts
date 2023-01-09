import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { baseURL, httpOptions } from 'src/environments/environment';


@Injectable({
  providedIn: 'root',
})


export class CountService {
  constructor(private http: HttpClient) { }

/*   getCountProductos(): Observable<number> {
    return this.http.get<number>(baseURL + '/producto/count', httpOptions);
  } */

  getCountUsuarios(): Observable<number> {
    return this.http.get<number>(baseURL + '/usuario/count', httpOptions);
  }

 /*  getCountTiposUsuario(): Observable<number> {
    return this.http.get<number>(baseURL + '/tipousuario/count', httpOptions);
  }

  getCountTiposProducto(): Observable<number> {
    return this.http.get<number>(baseURL + '/tipoproducto/count', httpOptions);
  }

  getCountCompras(): Observable<number> {
    return this.http.get<number>(baseURL + '/compra/count', httpOptions);
  }

  getCountFacturas(): Observable<number> {
    return this.http.get<number>(baseURL + '/factura/count', httpOptions);
  }

  getCountCarritos(): Observable<number> {
    return this.http.get<number>(baseURL + '/carrito/count', httpOptions);
  } */

}
