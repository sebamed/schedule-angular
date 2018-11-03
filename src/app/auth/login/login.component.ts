import { Component, OnInit } from '@angular/core';
import { ToastService } from 'src/app/common/services/toast.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ILoginDTO } from '../common/model/login-dto.model';
import { AuthService } from 'src/app/common/services/auth.service';
import { ILoginResponse } from '../common/model/login-response.model';
import { IErrorResponse } from 'src/app/common/model/error-response.model';

@Component({
    selector: 'app-auth-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss', '../common/scss/style.scss']
})

export class LoginComponent implements OnInit {

    loginForm: FormGroup;
    submitted = false;

    loginDTO: ILoginDTO;

    constructor(private _toast: ToastService, private formBuilder: FormBuilder, private _auth: AuthService) {

    }

    ngOnInit() {
        this.defineForm();
    }

    get form() {
        return this.loginForm.controls;
    }

    defineForm() {
        this.loginForm = this.formBuilder.group({
            email: ['', [Validators.required]], // dodaj  Validators.email
            password: ['', [Validators.required]]
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.loginForm.invalid) {
            return;
        } else {
            this.login();
        }
    }

    login() {
        this.loginDTO = {
            email: this.loginForm.get('email').value,
            password: this.loginForm.get('password').value
        };

        this._auth.login(this.loginDTO).subscribe((res: ILoginResponse) => {
            console.log(res);
        }, (error: IErrorResponse) => {
            console.log(error);
            this._toast.addErrorToast(error.errorMessage);
        });

    }
}
