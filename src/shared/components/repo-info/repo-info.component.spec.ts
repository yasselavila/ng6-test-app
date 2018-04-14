import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { RepoInfoComponent } from './repo-info.component';

describe('[Shared] Component: Repo Info', () => {
  let fixture: ComponentFixture<RepoInfoComponent>;
  let cmp: RepoInfoComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepoInfoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoInfoComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
