  class ProductPage {
    sizeOption(size) { return cy.get(`[option-label="${size}"]`) }
    colorOption(color) { return cy.get(`[option-label="${color}"]`) }
    addToCartButton() { return cy.get('#product-addtocart-button') }
    productLink(productName) { return cy.get('.product-item-link').contains(productName) }
    loggedInBanner(name) { return cy.contains('.logged-in', `Welcome, ${name}!`) }

  
addProductToCart(size, color, productName) {
        this.productLink(productName).click();
        this.sizeOption(size).click({ force: true });
        this.colorOption(color).click({ force: true });
        this.addToCartButton().click();
        cy.wait(3000); // Adjust if necessary
    }

}


  export default new ProductPage()