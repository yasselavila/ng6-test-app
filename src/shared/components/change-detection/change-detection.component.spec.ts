import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { ChangeDetectionComponent } from './change-detection.component';

describe('[Shared] Component: Change Detection', () => {
  let fixture: ComponentFixture<ChangeDetectionComponent>;
  let cmp: ChangeDetectionComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        ChangeDetectionComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangeDetectionComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
