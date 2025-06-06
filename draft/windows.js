describe('OrangeHRM - window object usage', () => {
  it('logs the current URL using window object', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/');

    cy.window().then((win) => {
      // Access and log the current URL
      cy.log('Current URL: ' + win.location.href);

      // Optional: assert the domain
      expect(win.location.hostname).to.equal('opensource-demo.orangehrmlive.com');
    });
  });
});
