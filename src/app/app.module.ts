import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReactiveFormsModule } from '@angular/forms';
import { ReativeFormSkuComponent } from './reative-form-sku/reative-form-sku.component';
import { SubmitSuccessComponent } from './submit-success/submit-success.component';
import { DbOperationsService } from './db-operations.service';
import { HttpClientModule } from '@angular/common/http';
import { SubmitListComponent } from './submit-list/submit-list.component';
import { ReactiveFormSkuA11yComponent } from './reactive-form-sku-a11y/reactive-form-sku-a11y.component';

@NgModule({
  declarations: [
    AppComponent,
    ReativeFormSkuComponent,
    SubmitSuccessComponent,
    SubmitListComponent,
    ReactiveFormSkuA11yComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    DbOperationsService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
