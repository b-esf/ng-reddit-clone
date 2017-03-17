import { NgRedditClonePage } from './app.po';

describe('ng-reddit-clone App', function() {
  let page: NgRedditClonePage;

  beforeEach(() => {
    page = new NgRedditClonePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
