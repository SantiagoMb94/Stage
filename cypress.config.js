const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '6hznje',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
