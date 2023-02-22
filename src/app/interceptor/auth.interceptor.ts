import {
    HttpErrorResponse,
    HttpEvent,
    HttpHandler,
    HttpInterceptor,
    HttpRequest,
    HttpResponse
} from '@angular/common/http';

import { Injectable, Injector } from '@angular/core';
import { Observable, tap, throwError } from 'rxjs';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/service/session.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    constructor(
        private oSessionService: SessionService,
        private oRouter: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let request = req;
        if (this.oSessionService.isSessionActive()) {
            request = req.clone({
                setHeaders: {
                    authorization: `Bearer ${ this.oSessionService.getToken() }`
                  }
            });
        } else {
            this.oRouter.navigateByUrl('login');
        }
        
        return next.handle(request);
    }
}