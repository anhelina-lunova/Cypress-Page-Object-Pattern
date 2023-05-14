import { LoginPage } from "./pages/Login";
import { HomePage } from "./pages/HomePage";

const loginPage = new LoginPage();
const homePage = new HomePage();

describe("Module 3", () => {
  it("Тест №1", () => {
    loginPage.navigateToPage();
    loginPage.inputUserDataAndLogIn("user888@gmail.com", "1234567890");
    homePage.logOut();
  });

  it("Тест №2", () => {
    loginPage.navigateToPage();
    loginPage.inputUserDataAndLogIn("testowyqa@qa.team", "QA!automation-1");
    homePage.logOut();
  });
});
