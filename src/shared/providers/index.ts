import { Type, Injectable } from '@angular/core';

import { SearchEmitter } from './search-emitter/search-emitter';

export {
  SearchEmitter
};

export const PROVIDERS: Type<Injectable|any>[] = [
  SearchEmitter
];
