const url = Cypress.env('baseurl');

describe('OrangeHRM GET request intercept example', () => {
  it('should intercept the GET employment statuses request', () => {
    cy.visit('https://practice.expandtesting.com/iframe');
    cy.frameLoaded('#email-subscribe');
    cy.iframe('#email-subscribe').find('#btn-subscribe').click();
   
  });
});
