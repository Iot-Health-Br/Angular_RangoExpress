import {CanActivateFn, Router} from '@angular/router';

import {inject} from "@angular/core";
import {AuthServiceService} from "../service/auth.service";

export const managerGuard: CanActivateFn = (route, state) => {
  const authService: AuthServiceService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isAutenticado) {
    if (authService.isManager) {
      return true;
    } else {
      alert("Você não tem permissão")
      router.navigate(['/dashboard']);
      return false;
    }
  } else {
    console.log('Você não esta autenticado');
    router.navigate(['/login']);
    return false;
  }
};
