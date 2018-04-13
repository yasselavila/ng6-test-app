import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { NavBarComponent } from './nav-bar.component';

describe('[Shared] Component: Change Detection', () => {
  let fixture: ComponentFixture<NavBarComponent>;
  let cmp: NavBarComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        NavBarComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});

