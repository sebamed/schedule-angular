import { NgModule } from '@angular/core';
import { Routes, RouterModule, ExtraOptions } from '@angular/router';
import { ToastComponent } from './common/components/toast/toast.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  { path: 'auth', loadChildren: './auth/auth.module#AuthModule' }
];

const config: ExtraOptions = {
  useHash: true,
};


@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const appComponents = [
  AppComponent,
  ToastComponent
];
