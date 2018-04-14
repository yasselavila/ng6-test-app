import { Type, Directive } from '@angular/core';

import { ClickOutsideDirective } from './click-outside/click-outside.directive';

export {
  ClickOutsideDirective
};

export const DIRECTIVES: Type<Directive|any>[] = [
  ClickOutsideDirective
];
