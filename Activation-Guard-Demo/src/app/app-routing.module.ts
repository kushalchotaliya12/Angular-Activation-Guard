import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrganizationFormComponent } from './pages/organization-form/organization-form.component';
import { UserInfoFormComponent } from './pages/user-info-form/user-info-form.component';


const routes: Routes = [
  {path: 'userInfo' , component: UserInfoFormComponent},
  {path: 'organizationForm' , component: OrganizationFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
