class LoginPage {

  visit() {
    cy.visit('https://www.saucedemo.com/')
    cy.get('#user-name').should('be.visible')
  
  }

  preencherUsuario(user) {
    cy.get('#user-name').type(user)
  }

  preencherSenha(password) {
    cy.get('#password').type(password)
  }

  clicarLogin() {
    cy.get('#login-button').click()
  }

  login(user, password) {
    this.preencherUsuario(user)
    this.preencherSenha(password)
    this.clicarLogin()
  }
}

export default LoginPage