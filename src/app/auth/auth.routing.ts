import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthComponent } from './auth.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

const routes: Routes = [
    {
        path: '', component: AuthComponent, children: [
            { path: 'register', component: RegisterComponent, pathMatch: 'full' },
            { path: 'login', component: LoginComponent, pathMatch: 'full' },
            { path: '', redirectTo: 'login', pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class AuthRoutingModule { }

export const authComponents = [
    AuthComponent,
    LoginComponent,
    RegisterComponent
];
