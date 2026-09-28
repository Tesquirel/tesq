import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withInMemoryScrolling } from '@angular/router';

import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { register } from 'swiper/element/bundle'; // Import register
register(); // Register Swiper custom elements

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes, withInMemoryScrolling({
    scrollPositionRestoration: 'top',  // 👈 always scroll to top on navigation
    anchorScrolling: 'enabled',        // optional: supports #anchor links
  })), provideHttpClient()]
};
