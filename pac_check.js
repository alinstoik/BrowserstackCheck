var webdriver = require('selenium-webdriver');

// Input capabilities
var capabilities = {
'browserstack.local' : 'true',
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