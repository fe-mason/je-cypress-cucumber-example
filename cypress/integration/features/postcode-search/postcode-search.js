const { Before, Given, When, Then } = require("cypress-cucumber-preprocessor/steps");

const url = "https://www.just-eat.co.uk/";



Before(() => {
  cy.visit(url)
});

Given('I want food in {string}', function (string) {
  cy.get('[data-test-id="address-box-input"]').type(string, {force: true});
 });

When('I search for restaurants', function () {
  cy.get('[data-test-id="find-restaurants-button"]').click()
});

Then('I should see some restaurants in {string}', function (string) {
  cy.get('[data-test-id="openrestaurants-count-heading"]').invoke('text').then(parseFloat).should('be.gt', 0)
  cy.get('[data-search-container="openrestaurants"] div')
});