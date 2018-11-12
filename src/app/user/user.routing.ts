import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { NbTooltipDirective, NbTooltipModule } from '@nebular/theme';
import { RequestLessonWindowComponent } from './home/calendar/windows/request/request.component';
import { LessonInfoWindowComponent } from './home/calendar/windows/info/info.component';

const routes: Routes = [
    {
        path: '', component: UserComponent, children: [
            { path: 'home', component: HomeComponent, pathMatch: 'full' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class UserRoutingModule { }

export const userComponents = [
    UserComponent,
    HomeComponent,
    CalendarComponent,
    RequestLessonWindowComponent,
    LessonInfoWindowComponent
];

export const userEntryComponents = [
    RequestLessonWindowComponent,
    LessonInfoWindowComponent
];
