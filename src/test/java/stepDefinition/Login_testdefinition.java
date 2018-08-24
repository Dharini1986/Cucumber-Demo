package stepDefinition;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;	
import cucumber.api.java.en.When;
import cucumber.api.java.en.Then;	

public class Login_testdefinition {
	
	WebDriver driver =null;
	@Given("^User navigates to \"(.*?)\"$")
	public void user_navigates_to(String arg1) throws Throwable 
   {
		System.setProperty("webdriver.chrome.driver","D://chromedriver_win32//chromedriver.exe");
		driver = new ChromeDriver(); 	
		driver.manage().timeouts().implicitlyWait(1,TimeUnit.MINUTES);
        driver.get(arg1);
   }

  
	@When("^User enters  \"(.*?)\"  and  \"(.*?)\"$")
	public void user_enters_and(String UserName, String Password) throws Throwable
    {
    	WebElement loginvalue = driver.findElement(By.id("USER"));
    	loginvalue.sendKeys(UserName);
    	
    	WebElement Pwdvalue = driver.findElement(By.id("PASSWORD"));
    	Pwdvalue.sendKeys(Password);

    	WebElement Login_button = driver.findElement(By.id("login_button"));
    	Login_button.click();		 
    }

     @And("^User Clicks on login button$")
     public void user_Clicks_on_login_button() throws Throwable
     {
    	 
       	  System.out.println("user clicks the login button");
       	 
      }
     
     @Then("^Ultimatix homepage  needs to be displayed$")
     public void message_displayed_Login_Successfully() throws Throwable 
     {
    	 
       	  System.out.println("login NOT succesfull");
       	 
      }
     
    
     
     
}
