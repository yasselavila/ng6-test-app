import { Component, ChangeDetectionStrategy, Input } from '@angular/core';

import { ChangeDetectionComponent } from '../change-detection/change-detection.component';

@Component({
  selector: 'app-spinner',
  templateUrl: './spinner.component.html',
  styleUrls: ['./spinner.component.scss'],
  preserveWhitespaces: false,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpinnerComponent extends ChangeDetectionComponent {
  private _big: boolean = false;

  @Input('big') set big(value: boolean) {
    this._big = (false !== value);
    this.detectChanges();
  }

  get big(): boolean {
    return this._big;
  }
}
