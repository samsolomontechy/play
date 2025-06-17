// cypress.config.js (with "type": "module" in package.json)
import { defineConfig } from 'cypress';

export default defineConfig({
  e2e: {
    env: {
      baseurl: 'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
