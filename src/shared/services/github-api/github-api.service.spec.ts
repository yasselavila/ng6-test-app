import { PLATFORM_ID } from '@angular/core';
import { TestBed, async } from '@angular/core/testing';

import { GithubApiService } from './github-api.service';

describe('[Shared] Service: Platform', () => {
  let githubApiService: GithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        { provide: GithubApiService, useClass: GithubApiService, deps: [PLATFORM_ID] }
      ]
    });

    githubApiService = TestBed.get(GithubApiService);
  });

  it('should create the service', async(() => {
    expect(githubApiService).toBeTruthy();
  }));

  it('can check platform type', async(() => {
    const isServer: boolean = githubApiService.isServer();
    expect(isServer).toEqual(false);
  }));
});
