import { enableProdMode, CompilerOptions } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { environment as env } from '@app/env';
import { RootModule } from '@app/root';

if (env.production) {
  enableProdMode();
}

const bootstrapOptions: CompilerOptions|any = {
  preserveWhitespaces: false,
  // XXX: ngZone: 'noop', /* NgZone | 'zone.js' | 'noop' */
};

platformBrowserDynamic()
  .bootstrapModule(RootModule, bootstrapOptions)
  .catch((err: Error) => console.error(err));
