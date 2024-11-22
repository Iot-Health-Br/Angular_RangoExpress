
import {inject} from "@angular/core";
import {CanActivateFn, Router} from "@angular/router";
import {AuthServiceService} from "../service/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  const authService: AuthServiceService = inject(AuthServiceService);
  const router = inject(Router);

  if (authService.isAutenticado) {
    return true;}
  else {
    router.navigate(['/login']);
    return false;}
};
