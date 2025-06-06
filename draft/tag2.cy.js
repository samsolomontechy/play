const shouldRun = (tag) => { //function consumed in tests
  const filter = Cypress.env('tag'); //filter from command CLI
  return !filter || tag === filter;
};

describe('OrangeHRM Login Tests', () => {

  beforeEach(() => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
  });

  it('valid login', function () {  // ✅ use function() {} not () => {}
    if (!shouldRun('@smoke')) this.skip();

    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    cy.url().should('include', '/dashboard');
    cy.contains('Dashboard').should('be.visible');
  });

  it('invalid login', function () {
    if (!shouldRun('@regression')) this.skip();

    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content-text')
      .should('contain.text', 'Invalid credentials');
  });
  it('invalid login 2', function () {
    if (!shouldRun('@regression')) this.skip();

    cy.get('input[name="username"]').type('wronguser');
    cy.get('input[name="password"]').type('wrongpass');
    cy.get('button[type="submit"]').click();

    cy.get('.oxd-alert-content-text')
      .should('contain.text', 'Invalid credentials');
  });
});
