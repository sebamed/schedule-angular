import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiConsts } from '../constants/api.constants';
import { ISubject } from '../model/subject.model';
import { catchError } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IUpdateSkills } from '../model/dto/update-skills.model';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private _http: HttpClient) { }

    getUserSkills(id: number) {
        return this._http.get<ISubject[]>(ApiConsts.USER_ENDPOINT + id.toString() + '/skills')
            .pipe(
                catchError(this.handleServerErrors)
            );
    }

    updateUserSkills(id: number, skills: ISubject[]) {
        return this._http.post<ISubject[]>(ApiConsts.USER_ENDPOINT + id.toString() + '/skills', skills)
            .pipe(
                catchError(this.handleServerErrors)
            );
    }

    handleServerErrors(error: HttpErrorResponse) {
        return throwError(error.error);
    }
}
