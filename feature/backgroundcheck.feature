
Feature: Demo WebShop option
  
Background:
Given karthik launched chrome browser
And launched demo webshop url  

  @login
  Scenario: login process of demo web shop
    
    Then clicked on login
    And provided login credentials
    Then he should see home page


  @xregister
  Scenario: Registration process of demo web shop
    Then clicked on register
    And provided all details
    Then he should register successfully

   
