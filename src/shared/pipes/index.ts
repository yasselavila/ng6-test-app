import { Type, Pipe } from '@angular/core';

import { TimeAgoPipe } from './time-ago/time-ago.pipe';

export {
  TimeAgoPipe
};

export const PIPES: Type<Pipe|any>[] = [
  TimeAgoPipe
];
