/// <reference types="cypress" />

context("Actions", () => {
  before(() => {
    cy.visit("/");
  });

  // https://on.cypress.io/interacting-with-elements

  it(".type() - type into a DOM element", () => {
    // https://on.cypress.io/type
    cy.get("#query")
      .type("test query")
      .should("have.value", "test query")

      // .type() with special character sequences
      .type("{leftarrow}{rightarrow}{uparrow}{downarrow}")
      .type("{del}{selectall}{backspace}")

      // .type() with key modifiers
      .type("{alt}{option}") //these are equivalent
      .type("{ctrl}{control}") //these are equivalent
      .type("{meta}{command}{cmd}") //these are equivalent
      .type("{shift}")

      // Delay each keypress by 0.1 sec
      .type("test query", { delay: 100 })
      .should("have.value", "test query")
      .type("{selectall}{backspace}");

    cy.get("#query")
      // Ignore error checking prior to type
      // like whether the input is visible or disabled
      .type("morethanallowedsssssssssssssssssssssssssssssssssssss", {
        force: true,
      })
      .should(
        "have.value",
        "morethanallowedsssssssssssssssssssssssssssssssssss"
      )
      .type("{selectall}{backspace}");
  });

  it(".focus() - focus on a DOM element", () => {
    // https://on.cypress.io/focus
    cy.get("#query").focus();
  });

  it(".blur() - blur off a DOM element", () => {
    // https://on.cypress.io/blur
    cy.get("#query").type("About to blur").blur().clear();
  });

  it(".clear() - clears an input or textarea element", () => {
    // https://on.cypress.io/clear
    cy.get("#query")
      .type("Clear this text")
      .should("have.value", "Clear this text")
      .clear()
      .should("have.value", "");
  });

  it("test submit button", () => {
    // https://on.cypress.io/submit
    cy.contains("Donate Your 5 Cents").click();
    cy.get('[type="submit"]').should("be.disabled");
  });

  it(".click() - click on a DOM element", () => {
    // https://on.cypress.io/click
    cy.contains("Donate Your 5 Cents").click();

    // You can click on 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // clicking in the center of the element is the default
    cy.contains("Donate Your 5 Cents").click("topLeft", { force: true });
    cy.contains("Donate Your 5 Cents").click("top", { force: true });
    cy.contains("Donate Your 5 Cents").click("topRight", { force: true });
    cy.contains("Donate Your 5 Cents").click("left", { force: true });
    cy.contains("Donate Your 5 Cents").click("right", { force: true });
    cy.contains("Donate Your 5 Cents").click("bottomLeft", { force: true });
    cy.contains("Donate Your 5 Cents").click("bottom", { force: true });
    cy.contains("Donate Your 5 Cents").click("bottomRight", { force: true });

    // .click() accepts an x and y coordinate
    // that controls where the click occurs :)
  });

  it(".dblclick() - double click on a DOM element", () => {
    // https://on.cypress.io/dblclick

    // Our app has a listener on 'dblclick' event in our 'scripts.js'
    // that hides the div and shows an input on double click
    cy.contains("Donate Your 5 Cents").dblclick();
    cy.get("#owner").should("not.exist");
  });

  it(".scrollIntoView() - scroll an element into view", () => {
    // https://on.cypress.io/scrollintoview

    // normally all of these buttons are hidden,
    // because they're not within
    // the viewable area of their parent
    // (we need to scroll to see them)
    // scroll the footer into view, as if the user had scrolled
    cy.get("footer").scrollIntoView().should("be.visible");
  });

  it(".trigger() - trigger an event on a DOM element", () => {
    // https://on.cypress.io/trigger

    // To interact with a range input (slider)
    // we need to set its value & trigger the
    // event to signal it changed

    // Here, we invoke jQuery's val() method to set
    // the value and trigger the 'change' event
    cy.get("#query")
      .type("Read")
      .trigger("change")
      .get("ul")
      .contains("Read newspaper");
  });

  it("cy.scrollTo() - scroll the window or element to a position", () => {
    // https://on.cypress.io/scrollto

    // You can scroll to 9 specific positions of an element:
    //  -----------------------------------
    // | topLeft        top       topRight |
    // |                                   |
    // |                                   |
    // |                                   |
    // | left          center        right |
    // |                                   |
    // |                                   |
    // |                                   |
    // | bottomLeft   bottom   bottomRight |
    //  -----------------------------------

    // if you chain .scrollTo() off of cy, we will
    // scroll the entire window
    cy.scrollTo("bottom");
  });
});
