import { Component, OnInit } from '@angular/core';
import { AuthService } from '../common/services/auth.service';
import { ToastService } from '../common/services/toast.service';
import { AppConstants } from '../common/constants/app.constants';
import { Router } from '@angular/router';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html'
})

export class AdminComponent implements OnInit {
    constructor(private _auth: AuthService, private _toast: ToastService, private _router: Router) { }

    ngOnInit() {
        this.checkAdmin();
    }

    checkAdmin() {
        const user = this._auth.getUser();
        if ((user != null || user !== undefined)) {
            if (user.role.name !== AppConstants.ROLE_ADMIN) {
                this._toast.addErrorToast(AppConstants.TOAST_INSUFFICIENT_PERMISSION);
                this._router.navigate(['/']);
            } else {
                if (user.skills.length === 0) {
                    this._router.navigate(['/admin/add-skills']);
                } else {
                    this._toast.addSuccessToast('ima');
                }
            }
        }
    }

    checkSkills() {
        const user = this._auth.getUser();
        if (user.skills.length === 0) {
            // ide na skill stranicu
        }
    }
}
