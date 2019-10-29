package cucumbercasestudy.cucumbercasestudy;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import junit.framework.Assert;

public class addcart {
	WebDriver driver;
	@Given("Alex has registered on to Demo Web Shop site")
	public void alex_has_registered_on_to_Demo_Web_Shop_site() {
		driver=mydrivers.getDriver("Chrome");
		driver.get("http://demowebshop.tricentis.com/");
		driver.findElement(By.xpath("//a[text()='Register']")).click();		
		driver.findElement(By.xpath("//input[@name='FirstName']")).sendKeys("Alex");
		driver.findElement(By.xpath("//input[@name='LastName']")).sendKeys("Chacon");
		driver.findElement(By.xpath("//input[@name='Email']")).sendKeys("alex.chacon96@gmail.com");
		driver.findElement(By.xpath("//input[@name='Password']")).sendKeys("Password9876");
		driver.findElement(By.xpath("//input[@name='ConfirmPassword']")).sendKeys("Password9876");
		driver.findElement(By.xpath("//input[@name='register-button']")).click();
		
	    
	}

	@When("Alex search a particular product like computers")
	public void alex_search_a_particular_product_like_computers() {
		driver.findElement(By.xpath("//input[@name='q']")).sendKeys("computer");
		driver.findElement(By.xpath("//input[@value='Search']")).click();
	  
	}

	@When("Alex try to proceed to payment without adding any item in the cart")
	public void alex_try_to_proceed_to_payment_without_adding_any_item_in_the_cart() {
		
		driver.findElement(By.xpath("//span[text()='Shopping cart']")).click();
	   
	}

	@Then("DemoWebshop displays error message")
	public void demowebshop_displays_error_message() {
		String a=driver.getTitle();
		Assert.assertEquals(a, "Demo Web Shop. Shopping Cart");
		System.out.println("Your shopping cart is empty");
		//driver.findElement(By.xpath("//a[text()='Log out']")).click();
		driver.close();
	    
	}

}
