  class CartPage {
    showCart() { return cy.get('.showcart') }
    proceedToCheckout() { return cy.contains('Proceed to Checkout') }

    goToCart() {
        this.showCart().click()
        this.proceedToCheckout().click()
        cy.wait(4000) // Adjust if necessary
    }
  }

  export default new CartPage()