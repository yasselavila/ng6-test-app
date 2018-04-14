import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ChangeDetectionComponent } from '../change-detection/change-detection.component';
import { Repo } from '../../models';

@Component({
  selector: 'app-repo-info',
  templateUrl: './repo-info.component.html',
  styleUrls: ['./repo-info.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RepoInfoComponent extends ChangeDetectionComponent {
  private _data: Repo;

  @Input('data') set data(value: Repo) {
    this._data = value || null;
    this.detectChanges(true);
  }

  get data(): Repo {
    return this._data;
  }
}
