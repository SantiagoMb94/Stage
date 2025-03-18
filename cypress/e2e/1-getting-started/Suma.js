/// <reference types="cypress" />

// Welcome to Cypress!
// https://on.cypress.io/introduction
// https://stage.sumasolution.com/login

describe('example to-do app', () => {
  beforeEach(() => {
    cy.visit('https://stage.sumasolution.com/login')
  })

  it('displays two todo items by default', () => {
    cy.get('.bg-color-primary-indigo').should('be.visible')
    cy.get('.bg-color-primary-indigo').click()
    
  })
})
