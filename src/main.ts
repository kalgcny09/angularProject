import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);

//angular starts with this file then goes to app.module.ts 
//then it goes to app.component.ts (type script)
//which then loads app root, 
//which shows up on the index html page 
//that gets loaded to the browser
