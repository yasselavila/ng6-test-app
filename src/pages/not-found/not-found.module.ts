import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { NotFoundPageRoutingModule } from './not-found.routing';
import { NotFoundPageComponent } from './not-found.component';

@NgModule({
  imports: [
    SharedModule,
    NotFoundPageRoutingModule
  ],
  declarations: [
    NotFoundPageComponent
  ]
})
export class NotFoundPageModule {
}
