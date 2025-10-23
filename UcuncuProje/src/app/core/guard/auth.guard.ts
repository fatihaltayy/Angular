import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../../shared/service/auth.service';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router)
  const toaster = inject(ToastrService)
  
  if(authService.isLoggedIn()){
    //login olmus . izin ver
    return true;
  }
  router.navigate(['/']);
  toaster.warning('Once giriş yapiniz.');
  return false;
};
