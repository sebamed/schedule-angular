import { NgModule } from '@angular/core';
import { UserRoutingModule, userComponents } from './user.routing';
import { UserNebularModule } from './user.nebular.module';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
        UserRoutingModule,
        UserNebularModule
    ],
    declarations: [
        ...userComponents
    ],
    exports: [],
    providers: [],
})
export class UserModule { }
