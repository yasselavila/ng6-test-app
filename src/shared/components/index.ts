import { Type, Component } from '@angular/core';

import { ChangeDetectionComponent } from './change-detection/change-detection.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { RepoListComponent } from './repo-list/repo-list.component';
import { RepoInfoComponent } from './repo-info/repo-info.component';

export {
  ChangeDetectionComponent,
  NotFoundComponent,
  SpinnerComponent,
  NavBarComponent,
  RepoListComponent,
  RepoInfoComponent
};

export const COMPONENTS: Type<Component|any>[] = [
  ChangeDetectionComponent,
  NotFoundComponent,
  SpinnerComponent,
  NavBarComponent,
  RepoListComponent,
  RepoInfoComponent
];
