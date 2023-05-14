import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/HomePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe("Module 3", () => {
  it("Тест №1", () => {
    // cy.LogIn("user888@gmail.com", "1234567890");

    // cy.get("#open-navigation-menu-mobile").click();
    // cy.get(":nth-child(9) > .css-bve2vl").click();
    loginPage.navigateToPage();
    loginPage.inputUserDataAndLogIn("user888@gmail.com", "1234567890");
    homePage.logOut();
  });

  it("Тест №2", () => {
    // cy.LogIn("testowyqa@qa.team", "QA!automation-1");

    // cy.get("#open-navigation-menu-mobile").click();
    // cy.get(":nth-child(7) > .css-bve2vl").click();

    loginPage.navigateToPage();
    loginPage.inputUserDataAndLogIn("testowyqa@qa.team", "QA!automation-1");
    homePage.logOut();
  });
});
