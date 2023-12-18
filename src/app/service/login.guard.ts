
import { Router } from "@angular/router";
import { ToastrService } from 'ngx-toastr';
import { Injectable } from '@angular/core';
import { AuthenticationService } from "./authentication/authentication.service";
import { Observable, BehaviorSubject } from 'rxjs';
import { UrlTree } from "@angular/router";

@Injectable({
    providedIn: 'root'
  })
  export class LoginGuard {
  
    constructor(private authService: AuthenticationService, private toastr: ToastrService, private router: Router) { }
    
    canActivate():
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.authService.isAuthenticated$.value) {
      this.router.navigate(['/home']);
      return false;
    }
    return true;
  }
}