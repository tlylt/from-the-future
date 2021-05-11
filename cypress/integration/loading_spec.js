/// <reference types="cypress" />
describe('Loading and basic viewing', () => {
    it('Visits the homepage', () => {
        cy.visit('http://localhost:3000/from-the-future')
    })

    it('finds the content "Donate Your 5 Cents"', () => {
        cy.visit('http://localhost:3000/from-the-future')

        cy.contains('Donate Your 5 Cents').click()
        cy.get('#owner')
            .should("be.empty")
        cy.get('#note')
            .should("be.empty")

    })
})
//https://docs.cypress.io/guides/tooling/IDE-integration#Intelligent-Code-Completion
