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
    NbAccordionModule,
    NbWindowService,
    NbListModule,
    NbWindowModule,
    NbInputModule
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
        NbInputModule,
        NbMenuModule,
        NbUserModule,
        NbAccordionModule,
        NbListModule,
        NbWindowModule.forChild(),
        NbContextMenuModule
    ],
    exports: [
        NbSpinnerModule,
        NbCardModule,
        NbButtonModule,
        NbLayoutModule,
        NbActionsModule,
        NbSidebarModule,
        NbInputModule,
        NbMenuModule,
        NbUserModule,
        NbAccordionModule,
        NbListModule,
        NbWindowModule,
        NbContextMenuModule
    ],
    providers: [
        NbSidebarService,
        NbMenuService,
        NbMenuInternalService,
        NbWindowService
    ]
})
export class DashboardNebularModule { }
