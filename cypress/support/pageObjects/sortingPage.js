import * as element from "../elements/pageElements.js";

export const sortItems = (sortType) => {
    cy.get(element.productSorting.buttonSorting).select(sortType);
};

export const assertSortedNames = (order = 'asc') => {
    cy.get(element.InventoryPage.inventoryName).then(($items) => {
      const itemNames = [...$items].map((item) => item.innerText);
      const sortedItemNames = [...itemNames].sort();
  
      if (order === 'desc') {
        expect(itemNames).to.deep.equal(sortedItemNames.reverse()); // Memastikan nama produk terurut Z-A
      } else {
        expect(itemNames).to.deep.equal(sortedItemNames); // Memastikan nama produk terurut A-Z
      }
    });
};

export const assertSortedPrices = (order = 'asc') => {
    cy.get(element.InventoryPage.inventoryPrice).then(($prices) => {
      const prices = [...$prices].map((price) => parseFloat(price.innerText.replace('$', '')));
      const sortedPrices = [...prices].sort((a, b) => a - b);
  
      if (order === 'desc') {
        expect(prices).to.eql(sortedPrices.reverse()); // Memastikan harga produk terurut tinggi ke rendah
      } else {
        expect(prices).to.eql(sortedPrices); // Memastikan harga produk terurut rendah ke tinggi
      }
    });
};