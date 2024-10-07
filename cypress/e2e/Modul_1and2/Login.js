export class Login {
    navigate() {
        cy.visit("https://www.edu.goit.global/account/login");
      }
    validateInputs() {
        cy.get('#user_email').should('be.visible');
        cy.get('#user_password').should('be.visible');
    }
    completingData(){
        cy.get("#user_email").type("user888@gmail.com");
        cy.get('#user_password').type("1234567890");
    }
    PressLoginButton() {
        cy.get('.eckniwg2').click();
    }
    OpenNavigationMenu() {
        cy.get('#open-navigation-menu-mobile').click();
    }
    FindAndClickLogout() {
        cy.contains('Log out').click();
    }
}