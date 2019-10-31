
Feature: Demo Shop Login
  John wants to login to Demo Web Shop

  @DemoLogin
  Scenario Outline: Successful Login
    Given John is on Demo Web Shop page 
    When John clicks on Login
    And John enters "<Email>" and "<Password>"
    When John clicks on login 
    Then John shall be taken to homepage

    Examples: 
      | Email  										| Password 			| 
      | Pratik12378@gmail.com 		| Pratik123     | 
       
