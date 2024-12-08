import data from "../../fixtures/testData.js";
import {  addSingleItem } from "../../support/pageObjects/addToCartPage.js";
import { assertErrorMessage, assertOnCart, clickCheckout, clickContinueCheckout, clickShoppingCart } from "../../support/pageObjects/checkoutPage.js";

describe("Negative - Checkout", () => {
    beforeEach(() => { 
        cy.login(data.validCredentials.username, data.validCredentials.password);
    })

    it("Checkout with empty form", () => {
        addSingleItem();
        clickShoppingCart();
        assertOnCart(data.cart.yourCart);
        clickCheckout();
        //form information empty
        clickContinueCheckout();
        assertErrorMessage(data.checkout.errorMessages);
    })

})