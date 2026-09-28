import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from './auth.service';

/**
 * Functional guard for `canActivate`
 */
export const authGuard: CanActivateFn = async (route, state) => {
    const router = inject(Router);
    const authService = inject(AuthService);

    // Authentication check
    if (!authService.hasToken()) {
        window.alert("You don't have permission to view this page");
        router.navigate(['auth']);
        return false;
    }

    // Role permission check from original logic
    // const url = state.url;
    // if (!(url === "/" || url === "/change")) {
    // 	return await handleNavigationEvent(url);
    // }

    return true;
};