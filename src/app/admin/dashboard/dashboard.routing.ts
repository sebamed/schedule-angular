import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectOverviewComponent } from './subject/overview/overview.component';
import { RoleComponent } from './role/role.component';
import { RoleOverviewComponent } from './role/overview/overview.component';
import { UsersByRoleComponent } from './role/users/users-by-role.component';
import { TeachersBySubjectComponent } from './subject/teachers/teachers-by-subject.component';

const routes: Routes = [
    {
        path: '', component: DashboardComponent, children: [
            {
                path: 'subject', component: SubjectComponent, children: [
                    { path: '', component: SubjectOverviewComponent, pathMatch: 'full' },
                    { path: 'teachers', component: TeachersBySubjectComponent, pathMatch: 'full' }
                ]
            },
            {
                path: 'role', component: RoleComponent, children: [
                    { path: '', component: RoleOverviewComponent, pathMatch: 'full' },
                    { path: 'users', component: UsersByRoleComponent, pathMatch: 'full' }
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
    TeachersBySubjectComponent,
    RoleComponent,
    RoleOverviewComponent,
    UsersByRoleComponent
];
