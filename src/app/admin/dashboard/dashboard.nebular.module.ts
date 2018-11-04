import { NgModule } from '@angular/core';
import {
    NbLayoutModule,
    NbActionsModule,
    NbSidebarModule,
    NbSidebarService,
    NbMenuModule,
    NbUserModule,
    NbContextMenuModule,
    NbButtonModule,
    NbSpinnerModule,
    NbCardModule
} from '@nebular/theme';
import { NbMenuInternalService, NbMenuService } from '@nebular/theme/components/menu/menu.service';

@NgModule({
    imports: [
        NbSpinnerModule,
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbActionsModule,
        NbSidebarModule,
        NbMenuModule,
        NbUserModule,
        NbContextMenuModule
    ],
    exports: [
        NbSpinnerModule,
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbActionsModule,
        NbSidebarModule,
        NbMenuModule,
        NbUserModule,
        NbContextMenuModule
    ],
    providers: [NbSidebarService, NbMenuService, NbMenuInternalService]
})
export class DashboardNebularModule { }
