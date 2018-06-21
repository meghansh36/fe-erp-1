import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HomeModule } from '@L3Process/default/modules/home/home.module';
import { environment } from '../environments/environment';
import { FeFormBuilderModule } from '@L1Process/system/modules/form-builder/form-builder.module';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FeFormBuilderModule)
  .catch(err => console.log(err));
