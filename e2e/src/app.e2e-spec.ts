import { AppPage } from './app.po';

describe('workspace-project App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  const expectedTitle: string = 'Mi Github';

  it(`should display '${expectedTitle}' as title`, () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual(expectedTitle);
  });
});
