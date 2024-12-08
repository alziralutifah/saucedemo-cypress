import data from "../../fixtures/testData.js";
import { assertButtonCheckoutDisable, assertOnCart, clickShoppingCart } from "../../support/pageObjects/checkoutPage.js";

describe("Negative - Checkout", () => {
    beforeEach(() => { 
        cy.login(data.validCredentials.username, data.validCredentials.password);
    })

    it("Checkout without items", () => {
        clickShoppingCart();
        assertOnCart(data.cart.yourCart);
        assertButtonCheckoutDisable();
    })

})