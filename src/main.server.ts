import { bootstrapApplication } from '@angular/platform-browser';
import { RootComponent } from './app/components/root/root.component';
import { config } from './app/app.config.server';

const bootstrap = () => bootstrapApplication(RootComponent, config);

export default bootstrap;
