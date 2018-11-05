import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiConsts } from '../constants/api.constants';
import { ISubject } from '../model/subject.model';
import { catchError, map } from 'rxjs/operators';
import { throwError } from 'rxjs';
import { IUserInfo } from '../model/user-info.model';
import { IRole } from '../model/role.model';

@Injectable({ providedIn: 'root' })
export class UserService {

    constructor(private _http: HttpClient) { }

    getUsersBySubjectId(subject: ISubject) {
        return this._http.get<IUserInfo[]>(ApiConsts.USER_ALL_BY_SUBJECT +  subject.id.toString());
    }

    getUsersByRole(role: IRole) {
        return this._http.get<IUserInfo[]>(ApiConsts.USER_ALL_BY_ROLE + role.name);
    }

    getUserSkills(id: number) {
        return this._http.get<ISubject[]>(ApiConsts.USER_ENDPOINT + id.toString() + '/skills');
    }

    updateUserSkills(id: number, skills: ISubject[]) {
        return this._http.post<ISubject[]>(ApiConsts.USER_ENDPOINT + id.toString() + '/skills', skills)
            .pipe(
                map((data: ISubject[]) => {
                    const user = <IUserInfo>JSON.parse(localStorage.getItem('user'));
                    user.skills = data;
                    localStorage.setItem('user', JSON.stringify(user));
                })
            );
    }
}
