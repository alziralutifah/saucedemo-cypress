import data from "../../fixtures/testData.js"
import { assertErrorNotification } from "../../support/pageObjects/loginPage.js"

describe('Negative - Login Test', () => {
    it('Login with invalid password', () => {
        cy.login(data.validCredentials.username, data.invalidCredentials.password);
        assertErrorNotification(data.errorMessages.invalidLogin);
      });
})