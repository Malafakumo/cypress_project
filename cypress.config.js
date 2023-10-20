const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://trytestingthis.netlify.app/',
    watchForFileChanges: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
