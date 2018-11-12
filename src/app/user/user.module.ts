import { NgModule } from '@angular/core';
import { UserRoutingModule, userComponents, userEntryComponents } from './user.routing';
import { UserNebularModule } from './user.nebular.module';
import { CommonModule } from '@angular/common';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { NbWindowService } from '@nebular/theme';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
    imports: [
        DragDropModule,
        CommonModule,
        UserRoutingModule,
        UserNebularModule
    ],
    declarations: [
        ...userComponents
    ],
    exports: [],
    providers: [
        NbWindowService
    ],
    entryComponents: [
        ...userEntryComponents
    ]
})
export class UserModule { }
