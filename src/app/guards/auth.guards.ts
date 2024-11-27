import {CanActivateFn, Router} from '@angular/router';
import {AuthServiceService} from "../service/auth-service.service";
import {inject} from "@angular/core";

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthServiceService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isAutenticado) {
    console.log('Você não esta autenticado');
    return true;}
  else {
    router.navigate(['/login']);
    return false;}
};
