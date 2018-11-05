import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { throwError } from 'rxjs';
import { ISubject } from '../model/subject.model';
import { ApiConsts } from '../constants/api.constants';
import { catchError } from 'rxjs/operators';
import { IUserInfo } from '../model/user-info.model';

@Injectable({ providedIn: 'root' })
export class SubjectService {

    constructor(private _http: HttpClient) { }

    update(subject: ISubject) {
        return this._http.put<ISubject>(ApiConsts.SUBJECT_UPDATE, subject);
    }

    create(subject: ISubject) {
        return this._http.post<ISubject>(ApiConsts.SUBJECT_CREATE, subject);
    }

    getUsersBySubject(subject: ISubject) {
        return this._http.get<IUserInfo[]>(ApiConsts.SUBJECT_ENDPOINT + '/' + subject.id.toString() + '/users');
    }

    getAllSubjects() {
        return this._http.get<ISubject[]>(ApiConsts.SUBJECT_ALL_GET);
    }
}
