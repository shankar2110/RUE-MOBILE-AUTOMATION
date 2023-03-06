import { Given, When, Then } from "@cucumber/cucumber";
import LoginPage from "../pages/loginPage";

const platform = process.env.platform ?? "";
const loginPage = new LoginPage(platform);
let password: string;

Given("I am on the registration page", async function () {
  console.log("Background");
});

When(
  "I enter a password with less than {int} characters",
  async function (int) {
    console.log("When");
  }
);

Then(
  "I should see an error message stating that the password must be at least {int} characters long",
  async function (int) {
    console.log("Then");
  }
);

When(
  "I enter a password with more than {int} characters",
  async function (int) {
    console.log("When");
  }
);

When("I enter a password with exactly {int} characters", async function (int) {
  console.log("When");
});

Then(
  "I should be able to submit the registration form successfully",
  async function () {
    console.log("Then");
  }
);
