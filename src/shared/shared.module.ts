import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SERVICES } from './services';
import { COMPONENTS } from './components';
import { PIPES } from './pipes';

/* Do not specify providers for modules that might be imported by a lazy loaded module */

@NgModule({
  imports: [
    /* This imports are required in pages */
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    HttpClientModule,
    RouterModule,
    ReactiveFormsModule,
    ...COMPONENTS,
    ...PIPES
  ],
  entryComponents: [
    ...COMPONENTS
  ],
  declarations: [
    ...COMPONENTS,
    ...PIPES
  ]
})
export class SharedModule {
  public static withProviders(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        ...SERVICES
      ]
    };
  }
}
