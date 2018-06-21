import { Routes, RouterModule } from '@angular/router';
import { FormRenderComponent } from '@L3Process/system/modules/formRender/formRender.component';
//import { NgModule } from '@angular/core';

export const routesL1: Routes = [
    {
        path: '',
        component: FormRenderComponent
    }
];

/* @NgModule({
    imports: [RouterModule.forChild(formRoutesL1)],
    exports: [RouterModule]
})
export class FeFormRenderRoutes {} */


