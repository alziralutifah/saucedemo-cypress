import * as element from "../elements/pageElements.js"

export const visitLoginPage = () => {
    cy.visit(Cypress.env("baseUrl"));
};  
  
export const inputCredentials = (username, password) => {
    if (username) {
        cy.get(element.loginPage.inputUsername).type(username);
    }
    if (password) {
        cy.get(element.loginPage.inputPassword).type(password);
    }
};

export const inputUsername = (username) => {
    cy.get(element.loginPage.inputUsername).type(username);
}

export const inputPassword = (password) => {
    cy.get(element.loginPage.inputPassword).type(password);
}

export const clickLoginButton = () => {
    cy.get(element.loginPage.loginButton).click();
};

export const assertErrorNotification = (expectedMessage) => {
    cy.get(element.loginPage.errorMessage)
        .should("be.visible")
        .and("contain.text", expectedMessage);
};

export const assertLogoVisible = () => {
    cy.get(element.loginPage.logoSwaglabs).should("be.visible");
};