
@tag
Feature: Refund of item 

Background:
Given refund of faulty item as per guidelines
  @tag2
  Scenario Outline: TJeff returns faulty microwave
    Given Jeff has brought microwave for "<pricebefore>"
    And Jeff has the receipt
    When Jeff returns the faulty item
    Then Jeff got the refund of "<afterprice>"

    Examples: 
      | pricebefore | afterprice 	| 
      | $100        |     $90 		| 
      | $120 				|     $110		| 
