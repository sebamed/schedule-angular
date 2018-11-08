import { NgModule } from '@angular/core';
import { NbLayoutModule, NbCardModule, NbSpinnerModule } from '@nebular/theme';

@NgModule({
    imports: [
        NbLayoutModule,
        NbCardModule,
        NbSpinnerModule
    ],
    exports: [
        NbLayoutModule,
        NbCardModule,
        NbSpinnerModule
    ],
})
export class UserNebularModule { }
