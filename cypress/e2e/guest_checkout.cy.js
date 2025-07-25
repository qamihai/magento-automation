import 'cypress-xpath'
import LoginPage from '../pages/LoginPage.js'
import HomePage from '../pages/HomePage.js'
import ProductPage from '../pages/ProductPage.js'
import CartPage from '../pages/CartPage.js'
import CheckoutPage from '../pages/CheckoutPage.js'

describe('Logged-in User Checkout Flow', () => {
  const email = 'qamihai@gmail.com'
  const password = 'Test1234'
  const name = 'test test'

const testData = [
  {
    size: 'M',
    color: 'Green',
    productName: 'Balboa Persistence Tee'
  },
  {
    size: 'L',
    color: 'Blue',
    productName: 'Radiant Tee'
  }
]
testData.forEach(({ size, color, productName }) => {
  it(`should add ${productName} to cart`, () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    // Sign In
    LoginPage.login(email, password, name)

    // Search for product
    HomePage.searchProduct(productName)

    // Add product to cart
    ProductPage.addProductToCart(size, color, productName)

    // Go to cart and proceed to checkout
    CartPage.goToCart()
  })
  })

  it('should allow a logged-in user to search and place an order', () => {
    cy.visit('https://magento.softwaretestingboard.com/')

    // Sign In
    LoginPage.login(email, password, name)

    // Search for product
    HomePage.searchProduct('shirt')

    // Add product to cart
    // ProductPage.addProductToCart('M', 'Blue', 'Radiant Tee') // Adjust size and color as needed
    ProductPage.addProductToCart('M', 'Green', 'Balboa Persistence Tee') // Adjust size and color as needed

    // Go to cart and proceed to checkout
    CartPage.goToCart()
    CheckoutPage.selectShippingMethod('flatrate_flatrate')

    // Place Order
    CheckoutPage.placeOrder()
  })
})
