import data from "../../fixtures/testData.js";
const { sortItems, assertSortedNames } = require("../../support/pageObjects/sortingPage.js");


describe("Positive - Product Sorting", () => {
    beforeEach(() => {
        cy.login(data.validCredentials.username, data.validCredentials.password);
    })

    it("Sort items by Name (A to Z)", () => {
        sortItems('az');
        assertSortedNames('asc');
    })
})