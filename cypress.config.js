const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {},

    supportFile: "cypress/support/e2e.js",
  },
});

// Все параметры конфига: https://docs.cypress.io/guides/references/configuration
