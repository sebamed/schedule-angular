import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/common/services/toast.service';

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../common/scss/style.scss']
})

export class LoginComponent implements OnInit {


    constructor(private _toast: ToastService) {

    }

    ngOnInit() { }

    login() {
        this._toast.addSuccessToast('Uspesno ste se ulogovali!');
    }
}
