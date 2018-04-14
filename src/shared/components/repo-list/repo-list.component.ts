import {
  Component,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Input
} from '@angular/core';

import { ChangeDetectionComponent } from '../change-detection/change-detection.component';
import { GithubApiService } from '../../services';
import { Repo } from '../../models';

@Component({
  selector: 'app-repo-list',
  templateUrl: './repo-list.component.html',
  styleUrls: ['./repo-list.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoListComponent extends ChangeDetectionComponent {
  private _username: string;

  public error: boolean;
  public repos: Repo[];

  @Input('username') set username(value: string) {
    this._username = !!value ? String(value) : null;
    this.refreshData();
  }

  get username(): string {
    return this._username;
  }

  public constructor(
    private cd: ChangeDetectorRef,
    private githubApiService: GithubApiService
  ) {
    super(cd);
  }

  public refreshData(): void {
    this.repos = null;
    this.error = false;
    this.detectChanges(true);

    if (!this._username) {
      console.error('[repo-list] Please ser username');
      return;
    }

    this.githubApiService.getUserRepos(this._username)
      .subscribe(
        (repos: Repo[]) => this.repos = repos,
        (err: any) => this.error = true,
        () => this.detectChanges(true)
      );
  }
}
