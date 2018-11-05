import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IRole } from '../model/role.model';
import { ApiConsts } from '../constants/api.constants';

@Injectable({ providedIn: 'root' })
export class RoleService {

    constructor(private _http: HttpClient) { }

    create(role: IRole) {
        return this._http.post<IRole>(ApiConsts.ROLE_CREATE, role);
    }

    getAllRoles() {
        return this._http.get<IRole[]>(ApiConsts.ROLE_ALL_GET);
    }
}
