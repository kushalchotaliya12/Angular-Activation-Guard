import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { UserInfoFormComponent } from './pages/user-info-form/user-info-form.component';
import { OrganizationFormComponent } from './pages/organization-form/organization-form.component';

@NgModule({
  declarations: [
    AppComponent,
    UserInfoFormComponent,
    OrganizationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
