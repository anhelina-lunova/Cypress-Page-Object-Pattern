export class LoginPage {
  navigateToPage() {
    cy.visit("https://www.edu.goit.global/account/login");
  }

  inputUserDataAndLogIn(email, password) {
    cy.get("#user_email").type(email);
    cy.get("#user_password").type(password);
    cy.get("[type='submit']").click();
  }
}
