import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './admin.component';
import { AddSkillsComponent } from './skills/add-skills/add-skills.component';

const routes: Routes = [
    {
        path: '', component: AdminComponent, children: [
            { path: 'add-skills', component: AddSkillsComponent, pathMatch: 'full' },
            { path: '', loadChildren: './dashboard/dashboard.module#DashboardModule' }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AdminRoutingModule { }

export const adminComponents = [
    AdminComponent,
    AddSkillsComponent
];
