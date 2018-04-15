import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { CD_TESTING_PROVIDERS } from '@app/shared/testing/change-detection';

import { GithubApiService } from '../../services/github-api/github-api.service';
import { TimeAgoPipe } from '../../pipes/time-ago/time-ago.pipe';
import { SpinnerComponent } from '../spinner/spinner.component';
import { RepoInfoComponent } from '../repo-info/repo-info.component';
import { RepoListComponent } from './repo-list.component';

describe('[Shared] Component: Repo List', () => {
  let fixture: ComponentFixture<RepoListComponent>;
  let cmp: RepoListComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ...CD_TESTING_PROVIDERS,
        GithubApiService
      ],
      declarations: [
        TimeAgoPipe,
        SpinnerComponent,
        RepoInfoComponent,
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
