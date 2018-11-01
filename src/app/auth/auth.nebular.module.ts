import { NgModule } from '@angular/core';
import { NbLayoutModule, NbButtonModule, NbInputModule } from '@nebular/theme';


@NgModule({
    imports: [NbLayoutModule, NbButtonModule, NbInputModule],
    exports: [NbLayoutModule, NbButtonModule, NbInputModule]
})
export class AuthNebularModule { }
