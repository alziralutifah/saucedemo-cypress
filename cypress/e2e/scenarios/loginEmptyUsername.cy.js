import data from "../../fixtures/testData.js"
import { assertErrorNotification } from "../../support/pageObjects/loginPage.js"

describe('Negative - Login Test', () => {
    it('Login with empty Username Field', () => {
        cy.login("", data.validCredentials.password);
        assertErrorNotification(data.errorMessages.emptyUsername);
      });
})