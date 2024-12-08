import * as element from "../elements/pageElements.js";

export const addSingleItem = () => {
    cy.get(element.InventoryPage.buttonAddToCartOnesie).click();
}

export const addSeveralItem = (itemsToAdd) => {
    for (let i = 0; i < itemsToAdd; i++) {
        // Pilih item berdasarkan indeks dan klik tombol Add to Cart
        cy.get(element.InventoryPage.inventoryItem).eq(i).within(() => {
          cy.get(element.InventoryPage.buttonAddToCart).click();
        });
    }
}

export const assertBadgeCountSingle = () => {
    cy.get(element.InventoryPage.shoppingCartBadge).should('have.text', '1');
}

export const assertBadgeCountSeveral = (itemsToAdd) => {
    cy.get(element.InventoryPage.shoppingCartBadge).should('have.text', itemsToAdd.toString());
}

export const assertSingleItemInCart = (itemName, itemPrice) => {
    cy.get(element.cartPage.cartItem)
      .first()  
      .should('contain.text', itemName)  
      .and('contain.text', itemPrice);  
  };


export const assertCartItems = (expectedItems) => {
    cy.get(element.cartPage.cartItem).should('have.length', expectedItems.length);

    cy.get(element.cartPage.cartItem).each((item, index) => {
        cy.wrap(item).within(() => {
            cy.get(element.cartPage.cartItemName).should('contain.text', expectedItems[index]);
        });
    });
};      


export const removeOnesie = () => {
    cy.get(element.InventoryPage.buttonRemoveOnesie).should('exist');
}

export const removeButton = (itemsToAdd) => {
    for (let i = 0; i < itemsToAdd; i++) {
        cy.get(element.InventoryPage.buttonRemove).eq(i).should('exist').and('be.visible');
    }
}