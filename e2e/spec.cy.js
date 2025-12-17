describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://dashboard.stripe.com/login')
    cy.get('[data-testid="login-email-input"]').click() .type('talhatanveer568@gmail.com.com')
    cy.get('[data-testid="login-password-input"]').click().type('@Green333221')
    cy.get('.Button-align > .Flex-flex').click()

  })
})