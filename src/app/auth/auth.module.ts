import { NgModule } from '@angular/core';
import { authComponents, AuthRoutingModule } from './auth.routing';
import { AuthNebularModule } from './auth.nebular.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        AuthRoutingModule,
        AuthNebularModule
    ],
    exports: [],
    declarations: [...authComponents],
    providers: [],
})
export class AuthModule { }
