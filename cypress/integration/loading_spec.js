/// <reference types="cypress" />
describe('Loading and basic viewing', () => {
    beforeEach(() => {
        cy.visit('http://localhost:3000/from-the-future')
    })
    it('Visits the homepage', () => {
        cy.contains('From The Future')
    })

    it('finds the content "Donate Your 5 Cents"', () => {
        cy.contains('Donate Your 5 Cents').click()
        cy.get('#owner')
            .should("be.empty")
            .and('be.visible')
        cy.get('#note')
            .should("be.empty")
            .and('be.visible')
    })
})
