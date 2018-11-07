import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { SubjectComponent } from './subject/subject.component';
import { SubjectOverviewComponent } from './subject/overview/overview.component';
import { RoleComponent } from './role/role.component';
import { RoleOverviewComponent } from './role/overview/overview.component';
import { UsersByRoleComponent } from './role/users/users-by-role.component';
import { TeachersBySubjectComponent } from './subject/teachers/teachers-by-subject.component';
import { LessonComponent } from './lesson/lesson.component';
import { LessonRequestsComponent } from './lesson/requests/requests.component';
import { LessonViewComponent } from './lesson/lesson-view/lesson-view.component';
import { ConfirmLessonWindowComponent } from './lesson/windows/confirm/confirm-lesson.component';
import { ConfirmedLessonsComponent } from './lesson/confirmed/confirmed.component';
import { LessonInfoWindowComponent } from './lesson/windows/info/lesson-info.component';

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
            },
            {
                path: 'lesson', component: LessonComponent, children: [
                    { path: 'my-lessons/requests', component: LessonRequestsComponent, pathMatch: 'full' },
                    { path: 'my-lessons/confirmed', component: ConfirmedLessonsComponent, pathMatch: 'full' },
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
    UsersByRoleComponent,
    LessonComponent,
    LessonRequestsComponent,
    LessonViewComponent,
    ConfirmLessonWindowComponent,
    ConfirmedLessonsComponent,
    LessonInfoWindowComponent
];

export const dashboardEntryComponents = [
    ConfirmLessonWindowComponent,
    LessonInfoWindowComponent
];
