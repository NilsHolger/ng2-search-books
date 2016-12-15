import { Ng2Learnng2Page } from './app.po';

describe('ng2-learnng2 App', function() {
  let page: Ng2Learnng2Page;

  beforeEach(() => {
    page = new Ng2Learnng2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
