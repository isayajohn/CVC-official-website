import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { AuthService } from "./auth.service";

export const adminGuard: CanActivateFn = async (route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const locale = route.paramMap.get("locale") ?? "en";
  const isAuthenticated = await auth.checkSession();

  if (isAuthenticated) {
    return true;
  }

  return router.createUrlTree([`/${locale}/admin-login`], {
    queryParams: { redirect: state.url },
  });
};
