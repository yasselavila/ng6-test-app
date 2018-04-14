import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { RepoListComponent } from './repo-list.component';

describe('[Shared] Component: Repo List', () => {
  let fixture: ComponentFixture<RepoListComponent>;
  let cmp: RepoListComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        RepoListComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoListComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
