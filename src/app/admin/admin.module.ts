import { NgModule } from '@angular/core';
import { adminComponents, AdminRoutingModule } from './admin.routing';
import { AdminNebularModule } from './admin.nebular.module';
import { CommonModule } from '@angular/common';


@NgModule({
    imports: [
        CommonModule,
        AdminRoutingModule,
        AdminNebularModule
    ],
    exports: [],
    declarations: [
        ...adminComponents
    ],
    providers: [],
})
export class AdminModule { }
