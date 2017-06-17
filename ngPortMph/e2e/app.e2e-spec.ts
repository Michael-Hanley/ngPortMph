import { NgPortMPHPage } from './app.po';

describe('ng-port-mph App', () => {
  let page: NgPortMPHPage;

  beforeEach(() => {
    page = new NgPortMPHPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
