

Feature: Invalid add to cart
  The one where user moves to cart without adding item

  @DemoCart
  Scenario: Alex moves to cart without adding any item in it
    Given Alex has registered on to Demo Web Shop site
    When Alex search a particular product like computers
    And Alex try to proceed to payment without adding any item in the cart 
    Then DemoWebshop displays error message
