import data from "../../fixtures/testData.js";
import { addSingleItem, assertBadgeCountSingle, assertSingleItemInCart, removeOnesie } from "../../support/pageObjects/addToCartPage.js";
import * as element from "../../support/elements/pageElements.js";
import { logoutApp } from "../../support/pageObjects/logoutPage.js";

describe("Positive - Add to Cart", () => {
    beforeEach(() => { 
        cy.login(data.validCredentials.username, data.validCredentials.password);
    })

    it("Add a single item to the cart", () => {
        addSingleItem();
        assertBadgeCountSingle();
        removeOnesie();
        cy.get(element.InventoryPage.shoppingCartButton).click();
        assertSingleItemInCart(data.singleItems.items, data.singleItems.price);
  
    })

    afterEach(() => { 
        logoutApp();
    })
})
