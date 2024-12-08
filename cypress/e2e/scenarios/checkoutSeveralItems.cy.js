import data from "../../fixtures/testData.js";
import { addSeveralItem } from "../../support/pageObjects/addToCartPage.js";
import { assertCheckoutSuccess, assertOnCart, clickCheckout, clickContinueCheckout, clickShoppingCart, inputFirstname, inputLastname, inputPostalCode } from "../../support/pageObjects/checkoutPage.js";

describe("Positive - Checkout", () => {
    beforeEach(() => { 
        cy.login(data.validCredentials.username, data.validCredentials.password);
    })

    it("Checkout several items", () => {
        const itemsToAdd = 3;    
        addSeveralItem(itemsToAdd);
        clickShoppingCart();
        assertOnCart(data.cart.yourCart);
        clickCheckout();
        inputFirstname(data.userInfo.firstName);
        inputLastname(data.userInfo.lastName);
        inputPostalCode(data.userInfo.postalCode);
        clickContinueCheckout();
        assertCheckoutSuccess(data.checkout.successMessage);
    })

})