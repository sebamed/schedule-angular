import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { HomeComponent } from './home/home.component';
import { CalendarComponent } from './home/calendar/calendar.component';
import { NoContentComponent } from '../admin/dashboard/lesson/common/component/no-content/no-content.component';

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
    NoContentComponent,
    UserComponent,
    HomeComponent,
    CalendarComponent
];
