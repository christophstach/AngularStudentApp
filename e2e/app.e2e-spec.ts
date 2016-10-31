import { AngularStudentAppPage } from './app.po';

describe('angular-student-app App', function() {
  let page: AngularStudentAppPage;

  beforeEach(() => {
    page = new AngularStudentAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
