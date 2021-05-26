/// <reference types="cypress" />

context('Querying', () => {
  beforeEach(() => {
    cy.visit("/");
  })

  it('cy.get() - query DOM elements', () => {
    cy.get('#options-menu').should('contain', 'Sort By')
  })


  it('.within() - query DOM elements within a specific element', () => {
    // https://on.cypress.io/within
    cy.get(':nth-child(1) > .justify-items-end').within(() => {
      cy.get('button').should('have.attr', 'aria-label', 'hide advice')
    })
  })

  it('cy.root() - query the root DOM element', () => {
    cy.root().should('match', 'html')
  })
})
