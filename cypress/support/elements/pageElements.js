// Elemen untuk Login Page
export const loginPage = {
    inputUsername: "input[placeholder='Username']",
    inputPassword: "input[placeholder='Password']",
    loginButton: "input[id='login-button']",
    logoSwaglabs: "div[class='app_logo']",
    errorMessage: "h3[data-test='error']"
}

//Element untuk Logout
export const logoutPage = {
    burgerMenu: "button[id='react-burger-menu-btn']",
    logoutButton: "a[id='logout_sidebar_link']"
}

//Element untuk Inventory Page
export const InventoryPage = {
    buttonAddToCartOnesie: "button[id='add-to-cart-sauce-labs-onesie']",
    buttonAddToCart: "[data-test*='add-to-cart']",
    shoppingCartBadge: "span[data-test='shopping-cart-badge']",
    buttonRemoveOnesie: "button[data-test='remove-sauce-labs-onesie']",
    buttonRemove: "[data-test='remove-sauce-labs-bike-light']",
    inventoryItem: ".inventory_item",
    inventoryName: ".inventory_item_name",
    inventoryPrice: ".inventory_item_price",
    shoppingCartButton: "[class='shopping_cart_container']"
}

//Element untuk Product Sorting
export const productSorting = {
    buttonSorting: "[data-test='product-sort-container']" 
}

//Element untuk Checkout Page
export const cartPage = {
    cartTitle: "[data-test='title']",
    cartItem: '.cart_item', // Selector untuk elemen item dalam keranjang
    cartItemName: '.inventory_item_name', // Selector untuk nama item
    cartItemPrice: '.inventory_item_price', // Selector untuk harga item
    cartQuantity: '.cart_quantity', // Selector untuk jumlah item
    checkoutButton: "[data-test='checkout']"
}

//Element untuk Form Information Checkout
export const formCheckout = {
    firstNameInput: "[data-test='firstName']",
    lastNameInput: "[data-test='lastName']",
    postalCodeInput: "[data-test='postalCode']",
    continueButton: "[data-test='continue']",
    totalAmountLabel: "[data-test='total-label']",
    finishButton: "[data-test='finish']",
    orderCompleteHeader: "[data-test='complete-header']",
    errorMessage: '[data-test="error"]'
}
  