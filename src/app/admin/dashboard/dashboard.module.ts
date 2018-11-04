import { NgModule } from '@angular/core';
import { dashboardComponents, DashboardRoutingModule } from './dashboard.routing';
import { DashboardNebularModule } from './dashboard.nebular.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';


@NgModule({
    imports: [
        DashboardRoutingModule,
        DashboardNebularModule,
        Ng2SmartTableModule
    ],
    exports: [],
    declarations: [
        ...dashboardComponents
    ],
    providers: [],
})
export class DashboardModule { }
