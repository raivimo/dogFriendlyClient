import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { filter, map, Observable, Subscription, Subject } from 'rxjs';
import { CryptoService } from './crypto.service';
import { DecodeService } from './decode.service';
import { baseURL, httpOptions } from 'src/environments/environment';
import { IUsuario } from '../model/usuario-interface';

@Injectable({
    providedIn: 'root'
})

export class SessionService {

    private entityURL = '/session';
    sURL: string = `${baseURL}${this.entityURL}`;
    subject = new Subject<EmitEvent>();

    constructor(
        private oCryptoService: CryptoService,
        private oHttpClient: HttpClient,
        private oDecodeService: DecodeService
    ) { }

    login(strLogin: string, strPassword: string): Observable<string> {
        const loginData = JSON.stringify({ login: strLogin, password: this.oCryptoService.getSHA256(strPassword) });
        return this.oHttpClient.post<string>(this.sURL, loginData, httpOptions);
    }

    getUserName(): string {
        if (!this.isSessionActive()) {
            return "";
        } else {
            let token: string = localStorage.getItem("token");
            return this.oDecodeService.decode(token).name;
        }
    }

    getUserId(): Observable<number> {
       return this.oHttpClient.get<number>(this.sURL + "/getUserID", {withCredentials:true});
    }

    getUsertype(): string {
        if (!this.isSessionActive()) {
            return "";
        } else {
            let token: string = localStorage.getItem("token");
            return this.oDecodeService.decode(token).usertype;
        }
    }


    getToken(): string {
        return localStorage.getItem("token");
    }

    check(): Observable<String> {
        return this.oHttpClient.get<String>(this.sURL, httpOptions)
    }
    
    isSessionActive(): Boolean {
        let strToken: string = localStorage.getItem("token");
        if (strToken) {
            let oDecodedToken = this.oDecodeService.decode(strToken);
            if (Date.now() >= oDecodedToken.exp * 1000) {
                return false;
            } else {
                return true;
            }
        } else {
            return false;
        }
    }

    logout() {
        localStorage.removeItem("token");
    }

/*     on(event: Events, action: any): Subscription {
        return this.subject
            .pipe(
                filter((e: EmitEvent) => {
                    return e.name === event;
                }),
                map((e: EmitEvent) => {
                    return e.value;
                })
            )
            .subscribe(action);
    } */

    on(event: Events): Observable<String> {
      return this.subject.pipe(
          filter((e: EmitEvent) => {
              return e.event === event;
          }),
          map((e: EmitEvent) => {
              return e.token;
          })
      )
  }

    emit(event: EmitEvent) {
        this.subject.next(event);
    }


}



export class EmitEvent {
    constructor(public event: Events, public token?: string) { }
  }

// this works like a communication channel
export enum Events {
    login,
    logout
}