describe('Custom login command', () => {
    beforeEach( "Go to page", () => {
        cy.visit("https://www.edu.goit.global/account/login"); 
    }); 
    it ('Log in with custom login command', () => {
      cy.login('testowyqa@qa.team', 'QA!automation-1');
      cy.get('#open-navigation-menu-mobile').click();
      cy.get(':nth-child(9) > .next-bve2vl').click();
    });
});