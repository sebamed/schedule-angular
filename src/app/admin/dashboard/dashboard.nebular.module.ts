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
    NbCardModule,
    NbAccordionModule
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
        NbAccordionModule,
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
        NbAccordionModule,
        NbContextMenuModule
    ],
    providers: [NbSidebarService, NbMenuService, NbMenuInternalService]
})
export class DashboardNebularModule { }
