import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from './not-found.component';

export const NOT_FOUND_PAGE_ROUTES: Routes = [
  {
    path: '**',
    component: NotFoundPageComponent
  }
];

export const NotFoundPageRoutingModule: ModuleWithProviders = RouterModule.forChild(
  NOT_FOUND_PAGE_ROUTES
);
