import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';

import { SharedModule } from '@app/shared/shared.module';
import { PAGES } from '@app/pages';

import { RootRoutingModule } from './root.routing';
import { RootComponent } from './root.component';

@NgModule({
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    SharedModule.withProviders(),
    RootRoutingModule,
    ...PAGES
  ],
  exports: [
    RouterModule
  ],
  declarations: [
    RootComponent
  ],
  bootstrap: [
    RootComponent
  ]
})
export class RootModule {
}
