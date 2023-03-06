import { AppiumDriver } from "appium-doctor";
import { By, until } from "appium-base-driver";
import { appiumDriver } from "../support/hooks";

class LoginPage {
  private driver: AppiumDriver;
  private platform: string;

  private selectors: By = {
    username: {
      ios: By.id("usernameField"),
      android: By.id("username_field"),
    },
    password: {
      ios: By.id("passwordField"),
      android: By.id("password_field"),
    },
    loginButton: {
      ios: By.id("loginButton"),
      android: By.id("login_button"),
    },
  };

  constructor(platform: string) {
    this.driver = appiumDriver;
    this.platform = platform;
  }

  public async login(username: string, password: string) {
    const usernameField = await this.driver.findElement(
      this.selectors.username[this.platform]
    );
    await usernameField.sendKeys(username);

    const passwordField = await this.driver.findElement(
      this.selectors.password[this.platform]
    );
    await passwordField.sendKeys(password);

    const loginButton = await this.driver.findElement(
      this.selectors.loginButton[this.platform]
    );
    await loginButton.click();
  }
}

export default LoginPage;
