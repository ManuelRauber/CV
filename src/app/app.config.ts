import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter, withHashLocation, withViewTransitions } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { BlogService } from './components/blog/blog.service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes, withHashLocation(), withViewTransitions()),
    provideClientHydration(),
    {
      provide: APP_INITIALIZER,
      useFactory: (blogService: BlogService) => {
        return async () => {
          await blogService.preloadLatestPosts();
          return true;
        };
      },
      deps: [BlogService],
      multi: true,
    },
  ],
};
