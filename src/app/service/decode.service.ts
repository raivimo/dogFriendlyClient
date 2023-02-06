
import { Injectable } from '@angular/core';
import { IToken } from '../model/token-interface';


@Injectable({
    providedIn: 'root',
})

export class DecodeService {
    constructor() { }


    decode(token: string): any {
        const _decodeToken = (token) => {
            try {
                return JSON.parse(atob(token));
            } catch {
                return;
            }
        };
        return token
            .split('.')
            .map(token => _decodeToken(token))
            .reduce((acc, curr) => {
                if (!!curr) acc = { ...acc, ...curr };
                return acc;
            }, Object.create(null));
    }

    parseJwt(token): IToken {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }

}



