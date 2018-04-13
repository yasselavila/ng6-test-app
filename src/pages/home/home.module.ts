import { NgModule } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { HomePageRoutingModule } from './home.routing';
import { HomePageComponent } from './home.component';

@NgModule({
  imports: [
    SharedModule,
    HomePageRoutingModule
  ],
  entryComponents: [
    HomePageComponent
  ],
  declarations: [
    HomePageComponent
  ]
})
export class HomePageModule {
}
