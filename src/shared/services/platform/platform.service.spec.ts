import { TestBed, async } from '@angular/core/testing';
import { PLATFORM_ID } from '@angular/core';

import { PlatformService } from './platform.service';

describe('[Shared] Service: Platform', () => {
  let platformService: PlatformService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: PlatformService, useClass: PlatformService, deps: [PLATFORM_ID] }
      ]
    });

    platformService = TestBed.get(PlatformService);
  });

  it('should create the service', async(() => {
    expect(platformService).toBeTruthy();
  }));

  it('can check platform type', async(() => {
    const isServer: boolean = platformService.isServer();
    expect(isServer).toEqual(false);
  }));
});
