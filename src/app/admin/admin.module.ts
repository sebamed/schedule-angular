import { NgModule } from '@angular/core';
import { adminComponents, AdminRoutingModule } from './admin.routing';
import { AdminNebularModule } from './admin.nebular.module';


@NgModule({
    imports: [
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
