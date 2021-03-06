import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { CD_TESTING_PROVIDERS } from '@app/shared/testing/change-detection';

import { SpinnerComponent } from './spinner.component';

describe('[Shared] Component: Spinner', () => {
  let fixture: ComponentFixture<SpinnerComponent>;
  let cmp: SpinnerComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ...CD_TESTING_PROVIDERS
      ],
      declarations: [
        SpinnerComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpinnerComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
