import data from "../../fixtures/testData.js"
import { assertErrorNotification } from "../../support/pageObjects/loginPage.js"

describe('Negative - Login Test', () => {
    it('Login with empty Password Field', () => {
        cy.login(data.validCredentials.username, "");
        assertErrorNotification(data.errorMessages.emptyPassword);
      });
})  
    