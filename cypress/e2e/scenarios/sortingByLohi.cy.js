import data from "../../fixtures/testData.js";
const { sortItems, assertSortedPrices } = require("../../support/pageObjects/sortingPage");


describe("Positive - Product Sorting", () => {
    beforeEach(() => {
        cy.login(data.validCredentials.username, data.validCredentials.password);
    })
    
    it("Sort items by Price (low to high)", () => {
        sortItems('lohi');
        assertSortedPrices('asc');
    })

})