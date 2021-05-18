/// <reference types="cypress" />

context("Assertions", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  describe("Assertions", () => {
    it(".should() - make an assertion about the current subject", () => {
      cy.get(".max-w-prose").should("have.class", "text-left");
    });
  });
});
