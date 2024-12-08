import data from "../../fixtures/testData.js";
const { sortItems, assertSortedNames } = require("../../support/pageObjects/sortingPage");


describe("Positive - Product Sorting", () => {
    beforeEach(() => {
        cy.login(data.validCredentials.username, data.validCredentials.password);
    })
    
    it("Sort items by Name (Z to A)", () => {
        sortItems('za');
        assertSortedNames('desc');
    })
})