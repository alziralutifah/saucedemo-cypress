import * as element from "../elements/pageElements.js"

export const logoutApp = () => {
    cy.get(element.logoutPage.burgerMenu);
    cy.get(element.logoutPage.logoutButton);
}; 

