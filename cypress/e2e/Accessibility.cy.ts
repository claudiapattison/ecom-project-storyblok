describe('template spec', () => {
  it('check homepage', () => {
    cy.visit('http://localhost:3000/')
    cy.injectAxe()
    cy.wait(1000)
    cy.checkA11y()
  })
})