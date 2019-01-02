import org.openqa.selenium.By;
import org.openqa.selenium.Platform;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.openqa.selenium.remote.RemoteWebDriver;

import java.net.URL;

public class Error_Check {

    public static final String USERNAME = "amitpunjabi2";
    public static final String AUTOMATE_KEY = "Mh65Ccnrq1FMNyocsdfP";
    public static final String URL = "https://" + USERNAME + ":" + AUTOMATE_KEY + "@hub-cloud.browserstack.com/wd/hub";

    public static void main(String[] args) throws Exception {

        DesiredCapabilities caps = new DesiredCapabilities();
        caps.setCapability("browserName", "firefox");
        caps.setCapability("browserVersion", "62.0");
        caps.setCapability("os", "Windows");
        caps.setCapability("os_version", "10");
        caps.setCapability("browserstack.use_w3c", "true");
        caps.setCapability("build", "build1.0");
//        caps.setCapability("browserstack.idleTimeout", "300");

//        caps.setCapability("browserstack.selenium_version", "3.5.2");


            WebDriver driver = new RemoteWebDriver(new URL(URL), caps);
//        for(int i=0;i<250;i++) {
            driver.get("http://www.google.com");
//            Thread.sleep(20000);
            WebElement element = driver.findElement(By.name("q"));
//            Thread.sleep(20000);

            element.sendKeys("BrowserStack");
//            Thread.sleep(20000);

            element.submit();
//            Thread.sleep(20000);


            System.out.println(driver.getTitle());
            Thread.sleep(2000);

//        }
        driver.quit();
    }
}
