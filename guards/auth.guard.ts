import { Injectable } from "@angular/core";
import { CanActivate, Router } from "@angular/router";
import { AuthService } from "src/app/Services/auth.service";

@Injectable({
    providedIn : 'root'
})
export class AuthGuard implements CanActivate{
    constructor(private authservice : AuthService, private router : Router){}


    canActivate(){
        debugger
        const isUserLoggedInFromSession = sessionStorage.getItem('isUserLoggedIn');
        const isUserLoggedIn = isUserLoggedInFromSession && JSON.parse(isUserLoggedInFromSession);
        if(this.authservice.isUserLoggedIn || isUserLoggedIn){
            return true;
        }
        // debugger
        this.router.navigate(['login'])
        return false;
    }
}