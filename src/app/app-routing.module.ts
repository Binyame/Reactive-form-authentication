import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ReativeFormSkuComponent } from './reative-form-sku/reative-form-sku.component';
import { ReactiveFormSkuA11yComponent } from './reactive-form-sku-a11y/reactive-form-sku-a11y.component';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';

const routes: Routes = [
  { path: '', component: ReactiveFormSkuA11yComponent },
  { path: 'ngiferrors', component: ReativeFormSkuComponent },
  { path: 'success', component: SubmitSuccessComponent },
  { path: '', redirectTo: '', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
