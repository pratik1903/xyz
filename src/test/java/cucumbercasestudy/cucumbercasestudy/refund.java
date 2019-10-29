package cucumbercasestudy.cucumbercasestudy;

import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class refund {
	
	@Given("refund of faulty item as per guidelines")
	public void refund_of_faulty_item_as_per_guidelines() {
		System.out.println("");

	}

	@Given("Jeff has brought microwave for {string}")
	public void jeff_has_brought_microwave_for(String beforeprice) {

	}

	@Given("Jeff has the receipt")
	public void jeff_has_the_receipt() {
	
	}

	@When("Jeff returns the faulty item")
	public void jeff_returns_the_faulty_item() {
	   
	}

	@Then("Jeff got the refund of {string}")
	public void jeff_got_the_refund_of(String afterprice) {

	}


}
