import { browser, element, by } from 'protractor';

export class HappyPawsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('hpr-root h1')).getText();
  }
}
