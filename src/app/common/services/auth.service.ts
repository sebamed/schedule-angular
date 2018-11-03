import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ILoginDTO } from 'src/app/auth/common/model/login-dto.model';
import { ILoginResponse } from 'src/app/auth/common/model/login-response.model';
import { ApiConsts } from '../constants/api.constants';
import { catchError, map } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
import { IRegisterDTO } from 'src/app/auth/common/model/register-dto.model';
import { IUserInfo } from '../model/user-info.model';


@Injectable({ providedIn: 'root' })
export class AuthService {

    constructor(private _http: HttpClient) { }

    getUser(): IUserInfo {
        return JSON.parse(localStorage.getItem('user'));
    }

    getToken(): string {
        return localStorage.getItem('token');
    }

    login(loginDTO: ILoginDTO) {
        return this._http.post<ILoginResponse>(ApiConsts.LOGIN_ENDPOINT, loginDTO)
            .pipe(
                map((data: ILoginResponse) => {
                    localStorage.setItem('token', data.token);
                    localStorage.setItem('user', JSON.stringify(data.user));
                    return data;
                }), catchError(this.handleServerErrors)
            );
    }

    register(registerDTO: IRegisterDTO) {
        return this._http.post<IUserInfo>(ApiConsts.REGISTER_ENDPOINT, registerDTO)
            .pipe(
                catchError(this.handleServerErrors)
            );

    }

    handleServerErrors(error: HttpErrorResponse) {
        return throwError(error.error);
    }
}
