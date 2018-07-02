import { Routes, RouterModule } from '@angular/router';
import { LoginGuardService } from '@L3Process/default/modules/login/services/loginGuard.service';

export const routesL1: Routes = [
  { path: 'formBuilder',
    loadChildren: '@L3Process/system/modules/formBuilder/formBuilder.module#FormBuilderModule',
<<<<<<< HEAD
    // canActivate:[LoginGuardService]
=======
   // canActivate:[LoginGuardService]
>>>>>>> 075a31e6032f9bf03bec488f9e94cbac55a50984
  },
  { path: 'formRender',
    loadChildren: '@L3Process/system/modules/formRender/formRender.module#FormRenderModule',
    canActivate:[LoginGuardService]
  },
  { path: 'default',
    loadChildren: '@L3Process/default/modules/default/default.module#DefaultModule',
    //canActivate:[LoginGuardService]
  },
  { path: 'login',
    loadChildren: '@L3Process/default/modules/login/login.module#LoginModule'
  },
  {
    path:'**',
    redirectTo:'login'
  }
];
