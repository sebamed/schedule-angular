import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { NbSidebarService } from '@nebular/theme';
import {  DashboardConstants } from './common/constants/dashboard.constants';
import { AuthService } from 'src/app/common/services/auth.service';
import { IUserInfo } from 'src/app/common/model/user-info.model';

@Component({
    selector: 'app-admin-dashboard',
    templateUrl: './dashboard.component.html',
    changeDetection: ChangeDetectionStrategy.OnPush,
    styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

    sidebar_items: any;
    profile_items: any;

    user: IUserInfo;

    constructor(private sidebarService: NbSidebarService,
        private _auth: AuthService) {
    }

    ngOnInit() {
        this.user = this._auth.getUser();
        this.sidebar_items = DashboardConstants.SIDEBAR_ITEMS;
        this.profile_items = DashboardConstants.ADMIN_PROFILE_DROPDOWN_ITEMS;
    }

    toggle() {
        this.sidebarService.toggle(true);
        return false;
    }

}
