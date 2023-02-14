import { IUsuario2Form, IUsuario2Send } from '../model/usuario-interface';
import { HttpClient, HttpParams } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, Subject, filter, map } from 'rxjs';
import { baseURL } from 'src/environments/environment';
import { IUsuario } from '../model/usuario-interface';
import { IPage } from '../model/generic-types-interface';
import { httpOptions } from '../../environments/environment';
import { UsuarioViewAdminRoutedComponent } from '../component/application/usuario/routed/admin/usuario-view-admin-routed/usuario-view-admin-routed.component';
import { UsuarioViewUserRoutedComponent } from '../component/application/usuario/routed/user/usuario-view-user-routed/usuario-view-user-routed.component';
import { UsuarioPlistAdminRoutedComponent } from '../component/application/usuario/routed/admin/usuario-plist-admin-routed/usuario-plist-admin-routed.component';
import { UsuarioEditAdminRoutedComponent } from '../component/application/usuario/routed/admin/usuario-edit-admin-routed/usuario-edit-admin-routed.component';
import { UsuarioEditUserRoutedComponent } from '../component/application/usuario/routed/user/usuario-edit-user-routed/usuario-edit-user-routed.component';

export enum Events {
  UsuarioEditAdminRoutedComponent,
  UsuarioEditUserRoutedComponent
}

export class EmitEvent {
  constructor(public event: Events, public oUsuarioActualizado: IUsuario) { }
}


@Injectable({
  providedIn: 'root'
})

export class UsuarioService {



  private entityURL = '/usuario';
  url: string = ""

/*   subject = new Subject<EmitEvent>(); */

  usuarioObservale = new EventEmitter<IUsuario>(); 

  constructor(private oHttp: HttpClient) {
    this.url = `${baseURL}${this.entityURL}`;
  }

  getUsuariosPlist(page: number, size: number, termino: string, id_tipousuario: number, strSortField: string, strOrderDirection: string): Observable<IPage<IUsuario>> {
    let params = new HttpParams()
      .set("filter", termino)
      .set("page", page)
      .set("size", size);
    if (id_tipousuario != 0) {
      params = params.set("tipousuario", id_tipousuario);
    }
    if (strSortField != "") { //&sort=codigo,[asc|desc]
      if (strOrderDirection != "") {
        params = params.set("sort", strSortField + "," + strOrderDirection);
      } else {
        params = params.set("sort", strSortField);
      }
    }
    const { withCredentials, headers } = httpOptions
    return this.oHttp.get<IPage<IUsuario>>(this.url, { headers: headers, withCredentials, params: params });
  }

  getOne(id: number): Observable<IUsuario> {
    return this.oHttp.get<IUsuario>(this.url + "/" + id, httpOptions);
  }

  removeOne(id: number): Observable<number> {
    return this.oHttp.delete<number>(this.url + '/' + id, httpOptions);
  }

  updateOne(oUsuario2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.put<number>(this.url, oUsuario2Send, httpOptions);
  }


  newOne(oUsuario2Send: IUsuario2Send): Observable<number> {
    return this.oHttp.post<number>(this.url, oUsuario2Send, httpOptions);
  }

/*   on(event: Events): Observable<IUsuario> {
    return this.subject.pipe(
      filter((e: EmitEvent) => {
        return e.event === event;
      }),
      map((e: EmitEvent) => {
        return e.oUsuarioActualizado;
      })
    )
  } */

/*   emit(event: EmitEvent) {
    this.subject.next(event);
}
 */








}
