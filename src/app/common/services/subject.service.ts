import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ISubject } from '../model/subject.model';
import { ApiConsts } from '../constants/api.constants';
import { catchError } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class SubjectService {

    constructor(private _http: HttpClient) { }

    getAllSubjects() {
        return this._http.get<ISubject[]>(ApiConsts.SUBJECT_ALL_GET)
            .pipe(
                catchError(this.handleServerErrors)
            );
    }

    handleServerErrors(error: HttpErrorResponse) {
        return throwError(error.error);
    }

}
