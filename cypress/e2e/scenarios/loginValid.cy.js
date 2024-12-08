import data from "../../fixtures/testData.js"
import {  assertLogoVisible } from "../../support/pageObjects/loginPage.js"
import { logoutApp } from "../../support/pageObjects/logoutPage.js"

describe('Positive - Login Test', () => {
  it('Login with valid credentials', () => {
    cy.login(data.validCredentials.username, data.validCredentials.password)
    assertLogoVisible();
    logoutApp();
  })
})
  

