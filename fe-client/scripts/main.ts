import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { FeFormRenderModule } from '@L1Process/system/modules/form-render/form-render.module';
import { environment } from '../environments/environment';

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(FeFormRenderModule)
  .catch(err => console.log(err));
