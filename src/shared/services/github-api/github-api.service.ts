import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class GithubApiService {
  public constructor(private http: HttpClient) {
  }
}
