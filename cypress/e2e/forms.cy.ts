import "../support/e2e";

describe("form test", () => {
  beforeEach(() => {
    cy.visit("/forms");
  });

  it("test the sub button", () => {
    cy.contains(/testing forms/i).should("be.visible");
    cy.contains(/submitted email: test@test.com/i).should("not.exist");
    cy.getDataTest("email-input").as("emailInput");

    // alias: emailInput
    cy.get("@emailInput").type("test@test.com");
    cy.getDataTest("subscribe-btn").click();
    cy.contains(/submitted email: test@test.com/i).should("be.visible");

    cy.wait(2000);
    cy.contains(/submitted email: test@test.com/i).should("not.exist");
  });
});
