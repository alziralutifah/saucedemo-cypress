import * as element from "../elements/pageElements.js";

export const clickShoppingCart = () => {
    cy.get(element.InventoryPage.shoppingCartButton).click();
}

export const assertOnCart = (title) => {
    cy.get(element.cartPage.cartTitle).should('contain', title);
}

export const clickCheckout = () => {
    cy.get(element.cartPage.checkoutButton).click();
}

export const inputFirstname = (firstName) => {
    cy.get(element.formCheckout.firstNameInput).type(firstName);
}

export const inputLastname  = (lastName) => {  
    cy.get(element.formCheckout.lastNameInput).type(lastName);
}

export const inputPostalCode = (postalCode) => {
    cy.get(element.formCheckout.postalCodeInput).type(postalCode);
}

export const clickContinueCheckout = () => {
    cy.get(element.formCheckout.continueButton).click();
}

export const assertCheckoutSuccess = (successMessage) => {
    cy.get(element.formCheckout.totalAmountLabel).should('be.visible');
    cy.get(element.formCheckout.finishButton).click();
    cy.get(element.formCheckout.orderCompleteHeader).should('contain.text', successMessage);
};

export const assertErrorMessage = (errorMessage) => {
    cy.get(element.formCheckout.errorMessage).should('contain', errorMessage);
};

export const assertButtonCheckoutDisable = () => {
    cy.get(element.cartPage.checkoutButton).should('not.exist');
};



