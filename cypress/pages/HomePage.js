  class HomePage {
    searchInput() { return cy.get('#search') }

    searchProduct(productName) {
        this.searchInput().type(`${productName}{enter}`)
    }
  }
export default new HomePage()