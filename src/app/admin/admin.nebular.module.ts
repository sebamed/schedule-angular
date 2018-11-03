import { NgModule } from '@angular/core';
import { NbLayoutModule, NbCardModule, NbButtonModule } from '@nebular/theme';

@NgModule({
    imports: [NbLayoutModule, NbCardModule, NbButtonModule],
    exports: [NbLayoutModule, NbCardModule, NbButtonModule]
})
export class AdminNebularModule { }
