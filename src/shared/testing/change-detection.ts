import { ChangeDetectorRef } from '@angular/core';

export class ChangeDetectorRefMock {
    public markForCheck(): void {}
    public detach(): void {}
    public detectChanges(): void  {}
    public checkNoChanges(): void  {}
    public reattach(): void {}
}

export const CD_TESTING_PROVIDERS: any[] = [
  { provide: ChangeDetectorRef, useClass: ChangeDetectorRefMock }
];
