import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appComponents } from './app.routing';
import { AppComponent } from './app.component';

import { NbThemeModule, NbWindowService, NbWindowModule } from '@nebular/theme';
import { ToastService } from './common/services/toast.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthService } from './common/services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ApiInterceptor } from './common/interceptor/api.interceptor';
import { SubjectService } from './common/services/subject.service';
import { UserService } from './common/services/user.service';
import { RoleService } from './common/services/role.service';
import { LessonService } from './common/services/lesson.service';

@NgModule({
  declarations: [
    ...appComponents
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot()
  ],
  providers: [
    ToastService,
    AuthService,
    SubjectService,
    UserService,
    RoleService,
    LessonService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptor,
      multi: true
    }
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
