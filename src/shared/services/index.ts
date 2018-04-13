import { Type, Injectable } from '@angular/core';

import { PlatformService } from './platform/platform.service';

export {
  PlatformService
};

export const SERVICES: Type<Injectable|any>[] = [
  PlatformService
];
