import { Micro20Page } from './app.po';

describe('micro20 App', function() {
  let page: Micro20Page;

  beforeEach(() => {
    page = new Micro20Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
