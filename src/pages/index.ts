import { NgModule, Type } from '@angular/core';

import { NotFoundPageModule } from './not-found';
import { HomePageModule } from './home';

export {
  HomePageModule,
  /* WARN: Must be the last!!! */
  NotFoundPageModule
};

export const PAGES: Type<NgModule>[] = [
  HomePageModule,
  /* WARN: Must be the last!!! */
  NotFoundPageModule
];
