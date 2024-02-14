import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './layout/home/home.component';
import { LoginComponent } from './layout/login/login.component';
import { AuthGuard } from './service/auth.guard';
import { LoginGuard } from './service/login.guard';
import { RegisterComponent } from './layout/register/register.component';
import { UserInformationComponent } from './layout/user-information/user-information.component';
import { DocumentUploadComponent } from './layout/document-upload/document-upload.component';
const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [LoginGuard]
  },
  {
    path: 'information',
    component: UserInformationComponent
  },
  {
    path: 'document',
    component: DocumentUploadComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
