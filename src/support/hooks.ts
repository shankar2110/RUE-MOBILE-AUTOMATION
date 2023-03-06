import { BeforeAll, AfterAll, Before, After } from "@cucumber/cucumber";
import { AppiumDriver, createDriver, DriverOptions } from "appium-doctor";
import * as allure from "allure-commandline";
import { appConfig } from "../config/app.config";
import appiumService from "../config/appium.config";

let appiumDriver: AppiumDriver;

BeforeAll(async () => {
  // Set up Appium driver and connect to the device
  const options: DriverOptions = {
    capabilities: {
      ...appConfig[process.env.PLATFORM || "android"],
      port: 4723,
      path: '/wd/hub',
    }
  };
  appiumDriver = await createDriver(options);
  
  try {
    console.log("Launching the app...");
    await appiumDriver.launchApp();
    console.log("App launched successfully!");
  } catch (err) {
    console.error("Failed to launch the app:", err);
  }
  
});

Before(async function () {
  // Set the Appium driver instance on the world object
  //this.driver = appiumDriver;

});

After(async function (scenario) {
  // Take a screenshot if the scenario fails
  const scenarioResult = scenario.result?.status as string;
  if (scenarioResult === "Failed") {
    const screenshot = await this.driver.takeScreenshot();
    this.attach(screenshot, "image/png");
  }
});

AfterAll(async () => {
  // Quit the Appium driver
  await appiumDriver.quit();

  // Generate and save the Allure report
  const allureReportPath = "./allure-report";
  const allureResultsPath = "./allure-results";
  allure(["generate", allureResultsPath, "--output", allureReportPath]);
});

export { appiumDriver };
