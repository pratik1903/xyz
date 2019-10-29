$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_h2a.06.17/eclipse-workspace/cucumbercasestudy/feature/addcart.feature");
formatter.feature({
  "name": "Invalid add to cart",
  "description": "  The one where user moves to cart without adding item",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Alex moves to cart without adding any item in it",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@DemoCart"
    }
  ]
});
formatter.step({
  "name": "Alex has registered on to Demo Web Shop site",
  "keyword": "Given "
});
formatter.match({
  "location": "addcart.alex_has_registered_on_to_Demo_Web_Shop_site()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alex search a particular product like computers",
  "keyword": "When "
});
formatter.match({
  "location": "addcart.alex_search_a_particular_product_like_computers()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alex try to proceed to payment without adding any item in the cart",
  "keyword": "And "
});
formatter.match({
  "location": "addcart.alex_try_to_proceed_to_payment_without_adding_any_item_in_the_cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "DemoWebshop displays error message",
  "keyword": "Then "
});
formatter.match({
  "location": "addcart.demowebshop_displays_error_message()"
});
formatter.result({
  "status": "passed"
});
});