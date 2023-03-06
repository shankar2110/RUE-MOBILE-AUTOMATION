export const appConfig = {
  android: {
    platformName: "Android",
    appPackage: "com.retailconvergence.ruelala",
    automationName: "UiAutomator2",
    deviceName: "Android Device",
    udid: "xx80x9xxxxx6x2xx",
    newCommandTimeout: 300,
  },
  ios: {
    platformName: "iOS",
    platformVersion: "14.5",
    deviceName: "iPhone 12 Pro Max",
    app: "../apps/app1.ipa",
    automationName: "XCUITest",
    bundleId: "com.example.app",
    udid: "<insert device UDID here>",
    newCommandTimeout: 300,
  },
};
