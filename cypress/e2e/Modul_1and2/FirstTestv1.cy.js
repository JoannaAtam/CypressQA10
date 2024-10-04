describe( "User can visit GoIT page", () => {
    beforeEach( "Go to page", () => {
        cy.visit("https://www.edu.goit.global/account/login"); 
    }); 
    it("Find box and pass user email", () => {
        cy.get("#user_email").type("user888@gmail.com"); 
        cy.get('#user_password').type("1234567890");
        cy.get('.eckniwg2').click();
        //wylogowanie działa, ale zauwazyłam, że po odpaleniu go za pierwszym razem zawsze się wywala (zbyt długi czas oczekiwania).
        //co może być powodem? cypress jest za szybki (szybszy niż załadownie lementów strony i nie odnajduje rozwijanego menu?)
        cy.get('#open-navigation-menu-mobile').click();
        cy.get(':nth-child(12) > .next-bve2vl').click();
      }); 
    });