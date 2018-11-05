import { Component, OnInit } from '@angular/core';
import { DashboardConstants } from '../../common/constants/dashboard.constants';
import { IUserInfo } from 'src/app/common/model/user-info.model';
import { IRole } from 'src/app/common/model/role.model';
import { RoleService } from 'src/app/common/services/role.service';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { ToastService } from 'src/app/common/services/toast.service';
import { UserService } from 'src/app/common/services/user.service';

@Component({
    selector: 'app-admin-dashboard-role-users',
    templateUrl: './users-by-role.component.html',
    styleUrls: ['./users-by-role.component.scss']
})

export class UsersByRoleComponent implements OnInit {

    data_loading: Boolean = true;

    table_settings: any;

    tables: any[] = [];

    roles: IRole[] = [];

    constructor(private _role: RoleService, private _toast: ToastService, private _user: UserService) { }

    ngOnInit() {
        this.table_settings = DashboardConstants.TABLE_SETTINGS_ROLE_USER;
        this.getAllRoles();
    }

    setAllTables(roles: IRole[]) {
        roles.forEach(role => {
            this._user.getUsersByRole(role).subscribe((data: IUserInfo[]) => {
                this.tables.push({
                    role: role.name,
                    users: data
                });
            });
        });
    }
    
    getAllRoles() {
        this._role.getAllRoles().subscribe((data: IRole[]) => {
            this.roles = data;
            this.setAllTables(this.roles);
            this.data_loading = false;
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }


}
