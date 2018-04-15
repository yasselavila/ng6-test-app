import { TestBed, async, ComponentFixture } from '@angular/core/testing';

import { CD_TESTING_PROVIDERS } from '@app/shared/testing/change-detection';

import { TimeAgoPipe } from '../../pipes/time-ago/time-ago.pipe';
import { RepoInfoComponent } from './repo-info.component';

describe('[Shared] Component: Repo Info', () => {
  let fixture: ComponentFixture<RepoInfoComponent>;
  let cmp: RepoInfoComponent;
  let element: any;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      providers: [
        ...CD_TESTING_PROVIDERS
      ],
      declarations: [
        TimeAgoPipe,
        RepoInfoComponent
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RepoInfoComponent);
    cmp = fixture.componentInstance;
    element = fixture.nativeElement;

    /* Mock data */
    cmp.data = {
      name: 'example',
      full_name: 'yasselavila/example',
      description: 'A description',
      private: false,
      html_url: 'http://sample.url/',
      updated_at: '2011-01-26T19:06:43Z',
      has_issues: false,
      open_issues_count: 0,
      forks_count: 0,
      stargazers_count: 0,
      license: {
        key: 'bsd-3-clause',
        name: 'BSD 3 Clause',
        spdx_id: 'BSD 3 Clause',
        url: 'http://sample.url/',
        html_url: 'http://sample.url/'
      }
    };

    fixture.detectChanges();
  });

  it('should create the component', () => {
    expect(cmp).toBeTruthy();
  });
});
