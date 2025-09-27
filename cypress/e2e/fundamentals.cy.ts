import "../support/e2e";

describe("Fundamentals test", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });
});

describe("heading", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("has a heading", () => {
    cy.get("h1").should("have.text", "Vite + React");
  });

  it("has a heading with a data tag", () => {
    cy.getDataTest("fundamental-header").contains(
      /This P tag has a tag: `data-test="fundamental-header"`/i // i for case insensitive
    );
  });
});

describe("Accordion", () => {
  it("Accordion works correctly", () => {
    cy.visit("/");
    cy.contains(/We offer worldwide shipping through trusted courier partners/i).should(
      "not.exist"
    );
    cy.get('[data-test="accordion-item-item-2"] [data-slot="accordion-trigger"]').click();
    cy.contains(/We offer worldwide shipping through trusted courier partners/i).should(
      "be.visible"
    );
    cy.get('[data-test="accordion-item-item-2"] [data-slot="accordion-trigger"]').click();
    cy.contains(/We offer worldwide shipping through trusted courier partners/i, {
      timeout: 2000,
    }).should("be.visible");
  });
});
