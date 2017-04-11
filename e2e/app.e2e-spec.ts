import { HappyPawsPage } from './app.po';

describe('happy-paws App', () => {
  let page: HappyPawsPage;

  beforeEach(() => {
    page = new HappyPawsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('hpr works!');
  });
});
