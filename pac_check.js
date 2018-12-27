var webdriver = require('selenium-webdriver');

var username = System.getenv("BROWSERSTACK_USERNAME");
var accessKey = System.getenv("BROWSERSTACK_ACCESS_KEY");
var browserstackLocal = System.getenv("BROWSERSTACK_LOCAL");
var browserstackLocalIdentifier = System.getenv("BROWSERSTACK_LOCAL_IDENTIFIER");

// Input capabilities
var capabilities = {
"browserstack.local": browserstackLocal,
 "browserstack.localIdentifier": browserstackLocalIdentifier,
 'build' : 'build1.0', 
"browserName" : "Chrome", 
"browserVersion" : "70.0", 
"os" : "Windows", 
"os_version" : "10", 
 'browserstack.user' : 'amitpunjabi2',
 'browserstack.key' : 'Mh65Ccnrq1FMNyocsdfP'
}

var driver = new webdriver.Builder().
  usingServer('http://hub-cloud.browserstack.com/wd/hub').
  withCapabilities(capabilities).
  build();

driver.get('https://time.is/')
driver.takeScreenshot()
driver.quit()
