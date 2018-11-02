import { NgModule } from '@angular/core';
import { NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule } from '@nebular/theme';


@NgModule({
    imports: [NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule],
    exports: [NbLayoutModule, NbButtonModule, NbInputModule, NbCardModule]
})
export class AuthNebularModule { }
