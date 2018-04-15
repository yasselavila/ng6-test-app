import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { RootComponent } from './root.component';

describe('App Root component', () => {
  let fixture: ComponentFixture<RootComponent>;
  let cmp: RootComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      /* Tells the compiler not to error on unknown elements and attributes */
      schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA],
      imports: [
        RouterTestingModule,
        SharedModule.withProviders()
      ],
      declarations: [
        RootComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RootComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  const expectedTitle: string = 'Mi Github';

  it('should create the app', () => {
    expect(cmp).toBeTruthy();
  });

  it(`should have as title '${expectedTitle}'`, () => {
    expect(element.querySelector('h1').textContent).toContain(expectedTitle);
  });
});
