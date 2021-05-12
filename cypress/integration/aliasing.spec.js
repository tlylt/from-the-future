/// <reference types="cypress" />

context('Aliasing', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/from-the-future')
    // Alias the route to wait for its response
    cy.intercept('GET', 'https://hkiq5n.deta.dev/').as('getAdvice')

    // https://on.cypress.io/wait
    cy.wait('@getAdvice').its('response.statusCode').should('eq', 200)
  })

  it('.as() - alias a DOM element for later use', () => {
    // Alias a DOM element for use later
    cy.get('#options-menu').as('sortBtn')

    // when we reference the alias, we place an
    // @ in front of its name
    cy.get('@sortBtn').click()

    cy.get('@sortBtn')
      .should('have.class', 'justify-center')
      .and('contain', 'Sort By')

    cy.get('[role=menu]').as('sortMenu')

    cy.get('@sortMenu')
      .should('contain', 'Owner Name')
      .and('contain', 'Length')
      .and('contain', 'Date')
      .and('contain', 'Asc')
      .and('contain', 'Desc')

    cy.get('@sortBtn').click()

    cy.get('@sortMenu').should('not.exist')
  })
})
