describe("Fundamentals test bl", () => {
  it("passes", () => {
    cy.visit("http://localhost:5173");
  });
});

describe("heading", () => {
  it("has a heading", () => {
    cy.visit("http://localhost:5173");
    cy.get("h1").should("have.text", "Vite + React");
  });
});
