import { PLATFORM_ID } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { SearchEmitter } from './search-emitter';

describe('[Shared] Provider: Search Emitter', () => {
  let searchEmitter: SearchEmitter;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: SearchEmitter, useClass: SearchEmitter, deps: [PLATFORM_ID] }
      ]
    });

    searchEmitter = TestBed.get(SearchEmitter);
  });

  it('should create the provider', async(() => {
    expect(searchEmitter).toBeTruthy();
  }));
});
