  class LoginPage {
    signInLink() { return cy.contains('a', 'Sign In') }
    emailInput() { return cy.get('#email') }
    passwordInput() { return cy.get('#pass') }
    signInButton() { return cy.get('#send2') }
    loggedInBanner(name) { return cy.contains('.logged-in', `Welcome, ${name}!`) }



    login(email, password, name) {
      this.signInLink().click()
      this.emailInput().type(email)
      this.passwordInput().type(password)
      this.signInButton().click()
      this.loggedInBanner(name).should('exist')
    }
  }



export default new LoginPage()