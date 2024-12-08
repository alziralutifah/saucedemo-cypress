import data from "../../fixtures/testData.js"
import { assertErrorNotification } from "../../support/pageObjects/loginPage.js"

describe('Negative - Login Test', () => {
    it('Login with invalid username', () => {
      cy.login(data.invalidCredentials.username, data.validCredentials.password);
      assertErrorNotification(data.errorMessages.invalidLogin);
    });
})