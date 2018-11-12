import { NgModule } from '@angular/core';
import {
    NbLayoutModule, NbCardModule, NbSpinnerModule, NbTooltipModule, NbWindowModule,
    NbListModule,
    NbInputModule,
    NbButtonModule,
    NbAccordionModule
} from '@nebular/theme';

@NgModule({
    imports: [
        NbLayoutModule,
        NbCardModule,
        NbSpinnerModule,
        NbTooltipModule,
        NbWindowModule.forChild(),
        NbListModule,
        NbInputModule,
        NbAccordionModule,
        NbButtonModule
    ],
    exports: [
        NbLayoutModule,
        NbCardModule,
        NbSpinnerModule,
        NbTooltipModule,
        NbWindowModule,
        NbListModule,
        NbInputModule,
        NbAccordionModule,
        NbButtonModule
    ],
    providers: [
    ]
})
export class UserNebularModule { }
