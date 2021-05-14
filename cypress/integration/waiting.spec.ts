/// <reference types="cypress" />

context("Waiting", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  // BE CAREFUL of adding unnecessary wait times.
  // https://on.cypress.io/best-practices#Unnecessary-Waiting

  // https://on.cypress.io/wait
  it("cy.wait() - wait for a specific amount of time", () => {
    cy.get("#query").type("Wait 1000ms after typing");
    cy.wait(1000);
    cy.get("#query").type("Wait 1000ms after typing");
    cy.wait(1000);
    cy.get("#query").type("Wait 1000ms after typing");
    cy.wait(1000);
  });
});
