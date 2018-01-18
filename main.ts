import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModuleNgFactory } from './app.module.ngfactory';
import { environment } from './environments/environment';
import { enableProdMode } from "@angular/core";

if (environment.production)
  enableProdMode();

// export function bootstrap() {
  platformBrowserDynamic().bootstrapModuleFactory(AppModuleNgFactory);
// }