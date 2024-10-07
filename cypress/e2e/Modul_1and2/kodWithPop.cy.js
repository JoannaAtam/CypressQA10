import { Login } from './Login.js';

const LoginPage = new Login();

describe("Page object example", () => {
  it("login page test", () => {
    LoginPage.navigate();
    LoginPage.validateInputs();
    LoginPage.completingData();
    LoginPage.PressLoginButton();
    LoginPage.OpenNavigationMenu();
    LoginPage.FindAndClickLogout();
  });
});