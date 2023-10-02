import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './login.service';
import { MatSnackBar } from '@angular/material/snack-bar';

export const normalGuard: CanActivateFn = (route, state) => {
  if (inject(LoginService).isLoggedIn() && inject(LoginService).getUserRole()=='NORMAL') {
    return true;
  }

  inject(MatSnackBar).open("You haven't permission to access it !",'',{
    duration: 3000,
  });
  
  inject(Router).navigate(['login']);
  return false;
};
