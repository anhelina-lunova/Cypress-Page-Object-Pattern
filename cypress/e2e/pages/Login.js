export class LoginPage {
  navigateToPage() {
    cy.get("#open-navigation-menu-mobile").click();
    cy.contains("Log out").click();
  }

  inputUserDataAndLogIn(email, password) {
    cy.get("#user_email").type(email);
    cy.get("#user_password").type(password);
    cy.get("[type='submit']").click();
  }
}
