import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA } from '@angular/core';

import { SharedModule } from '@app/shared/shared.module';

import { NotFoundPageComponent } from './not-found.component';

describe('[Page] Not Found', () => {
  let fixture: ComponentFixture<NotFoundPageComponent>;
  let cmp: NotFoundPageComponent;
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
        NotFoundPageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFoundPageComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  const expectedTitle: string = 'No encontrado';

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });

  it('should render title in a h3 tag', () => {
    expect(element.querySelector('h3').textContent).toContain(expectedTitle);
  });
});
