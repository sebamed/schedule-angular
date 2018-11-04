import { NgModule } from '@angular/core';
import { NbLayoutModule, NbCardModule, NbButtonModule, NbSpinnerModule } from '@nebular/theme';

@NgModule({
    imports: [NbSpinnerModule, NbLayoutModule, NbCardModule, NbButtonModule],
    exports: [NbSpinnerModule, NbLayoutModule, NbCardModule, NbButtonModule]
})
export class AdminNebularModule { }
