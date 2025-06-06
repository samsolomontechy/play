const url = Cypress.env('baseurl');

describe('OrangeHRM GET request intercept example', () => {
  it('should intercept the GET employment statuses request', () => {
    // Intercept the API request
    cy.intercept('GET', '/web/index.php/api/v2/admin/users?limit=50&offset=0&sortField=u.userName&sortOrder=ASC').as('getEmploymentStatuses');



    // Visit the login page
    cy.visit(`${url}`);

    // Login
    cy.get('input[name="username"]').type('Admin');
    cy.get('input[name="password"]').type('admin123');
    cy.get('input[name="password"]').type('admin123');
    cy.get('button[type="submit"]').click();

    // Navigate to a section that triggers the request
    cy.contains('Admin').click(); // Or 'PIM' if applicable

    // Wait for the intercepted API call
    cy.wait('@getEmploymentStatuses', { timeout: 10000 }).then((interception) => {
      expect(interception.response.statusCode).to.eq(200); // ✅ Expect 200, not 201
      cy.log('Response body: ' + JSON.stringify(interception.response.body.data));
      expect('sam').contains('sa');
    });
  });
});
