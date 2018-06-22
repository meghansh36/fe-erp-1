import { Routes, RouterModule } from '@angular/router';

export const routesL1: Routes = [
  { path: 'formBuilder', loadChildren: '@L3Process/system/modules/formBuilder/formBuilder.module#FormBuilderModule' },
  { path: 'formRender', loadChildren: '@L3Process/system/modules/formRender/formRender.module#FormRenderModule' },
  { path: 'login', loadChildren: '@L3Process/default/modules/login/login.module#LoginModule'}
];
