import { Type, Component } from '@angular/core';

import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';

export const COMPONENTS: Type<Component|any>[] = [
  ChangeDetectionComponent,
  NotFoundComponent,
  NavBarComponent
];
