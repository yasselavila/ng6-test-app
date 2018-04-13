import { Type, Injectable } from '@angular/core';

import { PlatformService } from './platform/platform.service';
import { GithubApiService } from './github-api/github-api.service';

export {
  PlatformService,
  GithubApiService
};

export const SERVICES: Type<Injectable|any>[] = [
  PlatformService,
  GithubApiService
];
