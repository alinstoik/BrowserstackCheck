var webdriver = require('selenium-webdriver');

var username = process.env.BROWSERSTACK_USER
var accessKey = process.env.BROWSERSTACK_ACCESSKEY
var browserstackLocal = process.env.BROWSERSTACK_LOCAL
var browserstackLocalIdentifier = process.env.BROWSERSTACK_LOCAL_IDENTIFIER
var build1 = process.env.BROWSERSTACK_BUILD

// Input capabilities
var capabilities = {
"browserstack.local": browserstackLocal,
 "browserstack.localIdentifier": browserstackLocalIdentifier,
"browserName" : "Chrome", 
"browserVersion" : "70.0", 
//  "build":"AM_Check1",
"build": build1 + "_AM_Build",
"os" : "Windows", 
"os_version" : "10", 
 'browserstack.user' : username,
 'browserstack.key' : accessKey
}

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

// driver.get('https://portal.t3x.tyl.usetyl.com/')
driver.get('https://portal.d03.tyl.usetyl.com/')

driver.takeScreenshot()
driver.wait(function() {return driver.executeScript('return document.readyState').then(function(readyState){return readyState === 'complete'; });});
driver.takeScreenshot()
// driver.quit()
