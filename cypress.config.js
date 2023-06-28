const { defineConfig } = require("cypress");
const cucumber = require('cypress-cucumber-preprocessor').default;
module.exports = defineConfig({
    // to change any configuration we use this file
    defaultCommandTimeout: 9000,
    // here i tell about the environment variables
    env: {
        url: "https://rahulshettyacademy.com"
    },
    projectId: "ewztrk",
    e2e: {
        // specPattern: '**/*.feature',
        async setupNodeEvents(on, config) {
            // implement node event listeners here
            // it is responsioble for loading all the plugins before starting the cypress 
            // await preprocessor.addCucumberPreprocessorPlugin(on, config);
            on('file:preprocessor', cucumber())
                // on("file:preprocessor", browserify.default(config));

        },
        // specPattern: 'cypress/e2e/BDD/*.feature'
    },
});