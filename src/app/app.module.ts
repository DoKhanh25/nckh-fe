import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './layout/home/home.component';
import { NavbarComponent } from './layout/navbar/navbar.component';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbNavModule } from '@ng-bootstrap/ng-bootstrap';
import { SideBarComponent } from './layout/side-bar/side-bar.component';
import { LayoutService } from './service/layout/layout.service';
import { LoginComponent } from './layout/login/login.component';
import { AuthenticationService } from './service/authentication/authentication.service';
import { HttpClientModule } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { JwtModule } from '@auth0/angular-jwt';
import { RegisterComponent } from './layout/register/register.component';
import { UserInformationComponent } from './layout/user-information/user-information.component';
import { UserInfoService } from './service/information/user-info.service';
import {CalendarModule} from 'primeng/calendar';
import { DocumentUploadComponent } from './layout/document-upload/document-upload.component';    
import { MultiSelectModule } from 'primeng/multiselect';
import { CopyrightInfoComponent } from './copyright-info/copyright-info/copyright-info.component';

export function tokenGetter(){
  return localStorage.getItem('auth_token')
}

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    SideBarComponent,
    LoginComponent,
    RegisterComponent,
    UserInformationComponent,
    DocumentUploadComponent,
    CopyrightInfoComponent
  ],
  imports: [
    CalendarModule,
    BrowserModule,
    NgbNavModule,
    AppRoutingModule,
    FormsModule,
    NgbModule,
    HttpClientModule,
    BrowserAnimationsModule,
    MultiSelectModule,
    ToastrModule.forRoot(),
    JwtModule.forRoot({
      config: {
        tokenGetter: tokenGetter,
        allowedDomains: ['localhost:5000']
      }
    })
  ],
  providers: [LayoutService, AuthenticationService, UserInfoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
