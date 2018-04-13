import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NotFoundPageComponent } from '@app/pages/not-found';

export const ROOT_ROUTES: Routes = [
  {
    path: 'home',
    loadChildren: '../pages/home/home.module#HomePageModule'
  },
  {
    path: '**',
    component: NotFoundPageComponent
  },
];

export const RootRoutingModule: ModuleWithProviders = RouterModule.forRoot(
  ROOT_ROUTES,
  {
    initialNavigation: 'enabled'
  }
);
