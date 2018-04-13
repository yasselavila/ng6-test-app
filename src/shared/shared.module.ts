import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { SERVICES } from './services';
import { COMPONENTS } from './components';

/* Do not specify providers for modules that might be imported by a lazy loaded module */

@NgModule({
  imports: [
    /* This imports are required in pages */
    CommonModule,
    RouterModule,
    ReactiveFormsModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    ReactiveFormsModule,
    ...COMPONENTS
  ],
  entryComponents: [
    ...COMPONENTS
  ],
  declarations: [
    ...COMPONENTS
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
