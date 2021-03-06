import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePageComponent } from './home.component';

export const HOME_PAGE_ROUTES: Routes = [
  {
    path: '',
    component: HomePageComponent,
    pathMatch: 'full'
  }
];

export const HomePageRoutingModule: ModuleWithProviders = RouterModule.forChild(
  HOME_PAGE_ROUTES
);
