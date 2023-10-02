import { Injectable, inject } from '@angular/core';
import { CanActivate, CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const adminGuard: CanActivateFn = (route, state) => {
  if (inject(LoginService).isLoggedIn() && inject(LoginService).getUserRole()=='ADMIN') {
    return true;
  }

  inject(MatSnackBar).open("You haven't permission to access it !",'',{
    duration: 3000,
  });

  inject(Router).navigate(['login']);
  return false;
};

// export class DenyGuestsGuard implements CanActivate {
//   private readonly isLoggedIn$ = inject(AuthService).isLoggedIn$

//   canActivate(
//     route: ActivatedRouteSnapshot,
//     state: RouterStateSnapshot) {

//     return this.isLoggedIn$;
//   }
// }

