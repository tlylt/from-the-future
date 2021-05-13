context('Aliasing', () => {
  beforeEach(() => {
    // Alias the route to wait for its response
    // intercept before visit https://glebbahmutov.com/blog/cypress-intercept-problems/
    cy.intercept('GET', Cypress.env("apiUrl"),{
      fixture: 'data.json',
      delayMs: 1000,
    }).as('getAdvice')
    cy.visit('/')
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
