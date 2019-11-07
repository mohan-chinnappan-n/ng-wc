import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

/*

 import the counter components we created and registers them with the browser.
  This step is important because, without it,
   we wouldn’t be able to use the components in our Angular app!

*/
import './app/web-components/ImperativeCounter.ts';
import './app/web-components/DeclarativeCounter.ts';



if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
