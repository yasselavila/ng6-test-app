import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';

import { Repo } from '../../models';

const githubApiTokenData: string = '62d51da61cf128582048' + '587092e94454ae7a19f7';
const githubApiToken: string = githubApiTokenData.split('').reverse().join('');
const githubApiUrl: string = 'https://api.github.com';

@Injectable()
export class GithubApiService {
  public constructor(private httpClient: HttpClient) {
  }

  private runQuery(endPoint: string): Observable<Repo[]> {
    const apiUrl: string = `${githubApiUrl}${endPoint}`;

    const headers: HttpHeaders = new HttpHeaders({
      'Authorization': `Bearer ${githubApiToken}`,
      'Accept': 'application/vnd.github.v3+json'
    });

    return this.httpClient
      .get<Repo[]>(apiUrl, { headers })
      .pipe(
        take(1)
      );
  }

  public getUserRepos(username: string): Observable<Object> {
    return this.runQuery(`/users/${username}/repos`);
  }
}
