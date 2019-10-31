package cucumbercasestudy.cucumbercasestudy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DemoLogin {
	WebDriver driver;
	@Given("John is on Demo Web Shop page")
	public void john_is_on_Demo_Web_Shop_page() {
		driver=mydrivers.getDriver("Chrome");
		driver.get("http://demowebshop.tricentis.com/login");    
	}

	@When("John clicks on Login")
	public void john_clicks_on_Login() {
	   driver.findElement(By.xpath("//a[text()='Log in']")).click();
	}

	@When("John enters {string} and {string}")
	public void john_enters_and(String Email, String Password) {
		driver.findElement(By.xpath("//input[@name='Email']")).sendKeys(Email);
		driver.findElement(By.xpath("//input[@name='Password']")).sendKeys(Password);
	}

	@When("John clicks on login")
	public void john_clicks_on_login() {
		driver.findElement(By.xpath("//input[@value='Log in']")).click();
	    
	}

	@Then("John shall be taken to homepage")
	public void john_shall_be_taken_to_homepage() {
		String a=driver.getTitle();
		Assert.assertEquals(a, "Demo Web Shop");
		driver.findElement(By.xpath("//a[text()='Log out']")).click();
		driver.close();
		
	   
	}

}
