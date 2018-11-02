import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ToastService } from 'src/app/common/services/toast.service';
import { AuthService } from 'src/app/common/services/auth.service';
import { IRegisterDTO } from '../common/model/register-dto.model';
import { IUserInfo } from 'src/app/common/model/user-info.model';
import { IErrorResponse } from 'src/app/common/model/error-response.model';
import { Router } from '@angular/router';

@Component({
    selector: 'app-auth-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss', '../common/scss/style.scss']
})

export class RegisterComponent implements OnInit {

    registerForm: FormGroup;
    submitted = false;

    registerDTO: IRegisterDTO;

    constructor(private _router: Router,
        private _toast: ToastService,
        private formBuilder: FormBuilder,
        private _auth: AuthService
    ) { }

    ngOnInit() {
        this.defineForm();
    }

    get form() {
        return this.registerForm.controls;
    }

    defineForm() {
        this.registerForm = this.formBuilder.group({
            firstName: ['', [Validators.required]],
            lastName: ['', [Validators.required]],
            email: ['', [Validators.required]], // dodaj  Validators.email
            password: ['', [Validators.required, Validators.minLength(6)]]
        });
    }

    onSubmit() {
        this.submitted = true;

        if (this.registerForm.invalid) {
            return;
        } else {
            this.register();
        }
    }

    register() {
        this.registerDTO = {
            firstName: this.registerForm.get('firstName').value,
            lastName: this.registerForm.get('lastName').value,
            email: this.registerForm.get('email').value,
            password: this.registerForm.get('password').value
        };

        this._auth.register(this.registerDTO).subscribe((data: IUserInfo) => {
            this._toast.addSuccessToast('Successfully signed up!');
            this._router.navigate(['/auth/login']);
        }, (error: IErrorResponse) => {
            this._toast.addErrorToast(error.errorMessage);
        });
    }
}
