class LoginClass {
  elements = {
    username: 'input[name="username"]',
    password: 'input[name="password"]',
    submit: 'button[type="submit"]'
  };

  /**

   * @param {string} usernameInput
   * @param {string} passwordInput
   */
  loginFlow(usernameInput, passwordInput) {
    cy.login(
      this.elements.username,
      usernameInput,
      this.elements.password,
      passwordInput,
      this.elements.submit
    );
  }
}

export default new LoginClass();
