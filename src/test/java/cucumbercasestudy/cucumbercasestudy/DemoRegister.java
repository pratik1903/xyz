package cucumbercasestudy.cucumbercasestudy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class DemoRegister {
	WebDriver driver;
	@Given("Pratik is on Demo Web Shop HomePage")
	public void pratik_is_on_Demo_Web_Shop_HomePage() {
		
 		driver=mydrivers.getDriver("Chrome");
		driver.get("http://demowebshop.tricentis.com/");		
	    	}

	@When("Pratik clicks on register")
	public void pratik_clicks_on_register() {
			driver.findElement(By.xpath("//a[text()='Register']")).click();
	}

	@When("Pratik enters {string} and  {string} and {string} and {string}")
	public void pratik_enters_and_and_and(String Gender, String Firstname, String Lastname, String Email) {
		String m="Male";
		if(Gender.equals(m)) {
			driver.findElement(By.xpath("//label[text()='Male']")).click();
		}
		else
			{
			driver.findElement(By.xpath("//label[text()='Female']")).click();
			}
			
		
		driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys(Firstname);
		driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys(Lastname);
		driver.findElement(By.xpath("//input[@name='Email']")).sendKeys(Email);
	
	}

	@When("pratik enters {string} and {string}")
	public void pratik_enters_and(String Password, String ConfirmPassword) {
		driver.findElement(By.xpath("//input[@name='Password']")).sendKeys(Password);
		driver.findElement(By.xpath("//input[@name='ConfirmPassword']")).sendKeys(ConfirmPassword);
		
	
	}

	@When("Pratik press register")
	public void pratik_press_register() {
		driver.findElement(By.xpath("//input[@name='register-button']")).click();
	   
	}

	@Then("Pratik shall be taken to homepage")
	public void pratik_shall_be_taken_to_homepage() {
		 String a=driver.getTitle();
		    Assert.assertEquals(a,"Demo Web Shop. Register");
		    driver.findElement(By.xpath("//a[text()='Log out']")).click();
			driver.close();
		}
		
	    
	}


