import { ChnorrisangularPage } from './app.po';

describe('chnorrisangular App', () => {
  let page: ChnorrisangularPage;

  beforeEach(() => {
    page = new ChnorrisangularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
