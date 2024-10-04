describe("User can visit GoIT page", () => {
  beforeEach("Go to page", () => {
    cy.visit("https://www.edu.goit.global/account/login");
  });
  it("Find box and pass user email", () => {
    cy.fixture("userData").then((user) => {
      cy.get("#user_email").type(user.email);
      cy.get("#user_password").type(user.password);
      cy.get(".eckniwg2").click();
      cy.get("#open-navigation-menu-mobile").click();
      cy.get(":nth-child(12) > .next-bve2vl").click();
    });
  });
});
