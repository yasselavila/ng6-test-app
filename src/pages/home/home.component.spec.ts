import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { SharedModule } from '@app/shared/shared.module';

import { HomePageComponent } from './home.component';

describe('[Page] Home', () => {
  let fixture: ComponentFixture<HomePageComponent>;
  let cmp: HomePageComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule,
        SharedModule.withProviders()
      ],
      declarations: [
        HomePageComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomePageComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  const expectedTitle: string = 'Welcome!';

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });

  it('should render title in a h2 tag', () => {
    expect(element.querySelector('h2').textContent).toContain(expectedTitle);
  });
});