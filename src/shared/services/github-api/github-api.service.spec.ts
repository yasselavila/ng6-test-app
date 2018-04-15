
import { TestBed, async } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

import { GithubApiService } from './github-api.service';

describe('[Shared] Service: Github API', () => {
  let githubApiService: GithubApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        { provide: GithubApiService, useClass: GithubApiService, deps: [HttpClient] }
      ]
    });

    githubApiService = TestBed.get(GithubApiService);
  });

  it('should create the service', async(() => {
    expect(githubApiService).toBeTruthy();
  }));
});
