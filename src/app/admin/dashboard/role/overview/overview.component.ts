import { Component, OnInit } from '@angular/core';
import { DashboardConstants } from '../../common/constants/dashboard.constants';
import { ToastService } from 'src/app/common/services/toast.service';
import { RoleService } from 'src/app/common/services/role.service';
import { IRole } from 'src/app/common/model/role.model';
import { LocalDataSource } from 'ng2-smart-table';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { AppConstants } from 'src/app/common/constants/app.constants';

@Component({
    selector: 'app-admin-dashboard-role-overview',
    templateUrl: './overview.component.html',
    styleUrls: ['./overview.component.scss']
})

export class RoleOverviewComponent implements OnInit {

    table_settings: any;
    roles: IRole[] = [];

    dataSource;

    data_loading: Boolean = true;

    constructor(private _role: RoleService,
        private _toast: ToastService) { }

    ngOnInit() {
        this.table_settings = DashboardConstants.TABLE_SETTINGS_ROLE;
        this.dataSource = new LocalDataSource();
        this.setAllRoles();
    }

    setAllRoles() {
        this._role.getAllRoles().subscribe((data: IRole[]) => {
            this.roles = data;
            this.dataSource.load(this.roles);
            this.dataSource.reset();
            this.data_loading = false;
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }

    onCreateConfirm(event) {
        if (event.newData.name === '') {
            this._toast.addErrorToast(AppConstants.TOAST_FIELD_EMPTY);
        } else {
            this._role.create(event.newData).subscribe((data: IRole) => {
                event.newData.id = data.id;
                event.confirm.resolve();
                this.setAllRoles();
                this._toast.addSuccessToast(AppConstants.TOAST_SUCCESSFULLY_CREATED);
            }, (error: IErrorResponse) => {
                this._toast.addErrorToast(error.errorMessage);
            });
        }
    }
}
