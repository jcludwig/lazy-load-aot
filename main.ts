import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app.module';
import { environment } from './environments/environment';
import { enableProdMode } from "@angular/core";

if (environment.production)
  enableProdMode();

// export function bootstrap() {
  platformBrowserDynamic().bootstrapModule(AppModule);
// }