import LoginPage from '../pages/login.page'

describe('Login', () => {

  it('Login valido', () => {
    const login = new LoginPage()

    login.visit()
    login.login('standard_user', 'secret_sauce')

    cy.url().should('include', 'inventory')
  })

})