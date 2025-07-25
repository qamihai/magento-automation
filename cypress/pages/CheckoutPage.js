  class CheckoutPage {
    shippingMethod(value) { return cy.xpath(`//input[@type='radio' and @value='${value}']`) }
    nextButton() { return cy.contains('Next') }
    placeOrderButton() { return cy.contains('Place Order') }
    successMessage() { return cy.xpath("//*[contains(@class, 'base')]") }

    selectShippingMethod(value) {
        this.shippingMethod(value).click();
        this.nextButton().click();
        cy.wait(5000); // Adjust if necessary
    }

    placeOrder() {
        this.placeOrderButton().click();
        this.successMessage().should('contain', 'Thank you for your purchase!');
    }
  }

  export default new CheckoutPage()