import LoginClass from '../support/Login.js'

describe('Login Test', () => {
  it('should log in successfully', () => {
    cy.visit('https://opensource-demo.orangehrmlive.com/web/index.php/auth/login');
    LoginClass.loginFlow('Admin', 'admin123');
  });
});
