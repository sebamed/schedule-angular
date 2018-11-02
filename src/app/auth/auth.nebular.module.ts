import { NgModule } from '@angular/core';
import { NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule, NbAlertModule } from '@nebular/theme';


@NgModule({
    imports: [NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule, NbAlertModule],
    exports: [NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule, NbAlertModule]
})
export class AuthNebularModule { }
