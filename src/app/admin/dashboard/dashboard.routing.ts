import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectOverviewComponent } from './subject/overview/overview.component';
import { RoleComponent } from './role/role.component';
import { RoleOverviewComponent } from './role/overview/overview.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            {
                path: 'subject', component: SubjectComponent, children: [
                    { path: '', component: SubjectOverviewComponent, pathMatch: 'full' }
                ]
            },
            {
                path: 'role', component: RoleComponent, children: [
                    { path: '', component: RoleOverviewComponent, pathMatch: 'full' }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
    declarations: [],
})
export class DashboardRoutingModule { }

export const dashboardComponents = [
    DashboardComponent,
    SubjectComponent,
    SubjectOverviewComponent,
    RoleComponent,
    RoleOverviewComponent
];
