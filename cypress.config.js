const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  pageLoadTimeout: 60000,
  requestTimeout: 5000,
  video: false,
  watchForFileChanges: false,
  defaultCommandTimeout: 60000,
  viewportHeight: 720,
  viewportWidth: 1280,
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports/mocha',
    reportFilename: '[status]-[datetime]-[name]-report',
    reportTitle: 'PlanIt',
    timestamp: 'longDate',
    overwrite: true,
    html: true,
    json: true
  },
  env: {
    hideXHR: true,
  },
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        log (message) {
          console.log(message);
          return null;
        }
      });

      return config;
    },
    testIsolation: false,
    specPattern: ['cypress/*/**/*.cy.{js,jsx,ts,tsx}'],
    excludeSpecPattern: ['cypress/*/*/commons/**'],
    baseUrl: 'https://jupiter.cloud.planittesting.com/#/'
  },
});
