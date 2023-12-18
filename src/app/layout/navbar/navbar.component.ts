import { Component, Output, EventEmitter } from '@angular/core';
import { LayoutService } from '../../service/layout/layout.service';
import { AuthenticationService } from '../../service/authentication/authentication.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  username: string = "Kevin";
  avatar: any = "assets/img/profile-img.jpg"
  searchQuery: any;

  constructor(public layoutService: LayoutService, public authenService: AuthenticationService){

  }
  
  logout(){
    this.authenService.logout();
  }


  sideBarToggle(){
   this.layoutService.toggleSideBar();
  }



}
