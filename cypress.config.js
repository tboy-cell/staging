
const { defineConfig } = require("cypress");
const webpack = require("@cypress/webpack-preprocessor");
const {
  addCucumberPreprocessorPlugin,
} = require("@badeball/cypress-cucumber-preprocessor");

async function setupNodeEvents(on, config) {
  await addCucumberPreprocessorPlugin(on, config);

  on(
    "file:preprocessor",
    webpack({
      webpackOptions: {
        resolve: {
          extensions: [".ts", ".js"],
        },
        module: {
          rules: [
            {
              test: /.feature$/,
              use: [
                {
                  loader: "@badeball/cypress-cucumber-preprocessor/webpack",
                  options: config,
                },
              ],
            },
          ],
        },
      },
    })
  );

  return config;
}

module.exports = defineConfig({
    e2e: {
        baseUrl: 'https://staging-payment-pro.blusalt.net/',
        experimentalWebKitSupport: true,
        specPattern: '**/*.feature',
        setupNodeEvents,
         viewportWidth: 1280,
         viewportHeight: 900,
    },
});
    