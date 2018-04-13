import { Component, Input, ChangeDetectorRef } from '@angular/core';

/*
 * Base Component for improved Change Detection
 */

@Component({
  moduleId: module.id,
  selector: 'app-change-detection',
  template: ''
})
export class ChangeDetectionComponent {
  public constructor(protected changeDetector: ChangeDetectorRef) {
  }

  public detectChanges(fullChangeDetection: boolean = false): void {
    this.changeDetector.markForCheck();

    if (fullChangeDetection) {
      this.changeDetector.detectChanges();
    }
  }
}
