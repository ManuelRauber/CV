import {
  ApplicationConfig,
  provideZoneChangeDetection,
  inject,
  provideAppInitializer,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BlogService } from './components/blog/blog.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZonelessChangeDetection(),
    provideRouter(routes, withViewTransitions()),
    provideClientHydration(),
    provideAppInitializer(() => {
      const initializerFn = ((blogService: BlogService) => {
        return async () => {
          await blogService.preloadLatestPosts();
          return true;
        };
      })(inject(BlogService));
      return initializerFn();
    }),
  ],
};
