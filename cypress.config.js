qconst { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    env:{
      baseurl:'https://opensource-demo.orangehrmlive.com/web/index.php/auth/login'
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
