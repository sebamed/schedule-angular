import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule, appComponents } from './app.routing';
import { AppComponent } from './app.component';

import { NbThemeModule } from '@nebular/theme';
import { ToastService } from './common/services/toast.service';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    ...appComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot()
  ],
  providers: [
    ToastService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
