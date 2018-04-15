import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { CD_TESTING_PROVIDERS } from '@app/shared/testing/change-detection';

import { SearchEmitter } from '../../providers/search-emitter/search-emitter';
import { ClickOutsideDirective } from '../../directives/click-outside/click-outside.directive';
import { NavBarComponent } from './nav-bar.component';

describe('[Shared] Component: Nav bar', () => {
  let fixture: ComponentFixture<NavBarComponent>;
  let cmp: NavBarComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      providers: [
        ...CD_TESTING_PROVIDERS,
        SearchEmitter
      ],
      declarations: [
        ClickOutsideDirective,
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

