import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from '@L3Process/default/modules/home/home.component';

export const routesL1: Routes = [
  { path: 'formBuilder', loadChildren: '@L3Process/system/modules/formBuilder/formBuilder.module#FormBuilderModule' },
  { path: 'formRender', loadChildren: '@L3Process/system/modules/formRender/formRender.module#FormRenderModule' },
];
