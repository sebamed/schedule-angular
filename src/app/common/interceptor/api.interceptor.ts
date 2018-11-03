import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable({ providedIn: 'root' })
export class ApiInterceptor implements HttpInterceptor {

    constructor(private _auth: AuthService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

        const headers = req.headers;

        if (req.url.includes('auth')) {
            console.log('auth');
            headers.set('Content-Type', 'application/json');
        } else {
            console.log('nije auth');
            headers
                .set('Content-Type', 'application/json')
                .set('Authorization', 'Bearer ' + this._auth.getToken());
        }
        const authReq = req.clone({ headers });
        return next.handle(authReq);
    }
}
