import data from "../../fixtures/testData.js";
import { addSeveralItem, assertBadgeCountSeveral } from "../../support/pageObjects/addToCartPage.js";
import { logoutApp } from "../../support/pageObjects/logoutPage.js";

describe("Positive - Add to Cart", () => {
    beforeEach(() => { 
        cy.login(data.validCredentials.username, data.validCredentials.password);
    })

    it("Add a several item to the cart", () => {
        const itemsToAdd = 3;    
        addSeveralItem(itemsToAdd);
        assertBadgeCountSeveral(itemsToAdd);
    })

    afterEach(() => { 
        logoutApp();
    })
})
