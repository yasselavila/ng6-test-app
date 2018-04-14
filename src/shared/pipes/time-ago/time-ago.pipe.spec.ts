import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAgoPipe } from './time-ago.pipe';

describe('[Shared] Pipe: Time Ago', () => {
  let fixture: ComponentFixture<TimeAgoPipe>;
  let cmp: TimeAgoPipe;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        TimeAgoPipe
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAgoPipe);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the pipe', () => {
    expect(cmp).toBeTruthy();
  });
});
