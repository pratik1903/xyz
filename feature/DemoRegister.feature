Feature: Demo Web Shop Registration
  user want to register to the Demo Web Shop Website

  @Register
  Scenario Outline: Successful Registration
    Given Pratik is on Demo Web Shop HomePage
    When Pratik clicks on register
    And Pratik enters "<Gender>" and  "<Firstname>" and "<Lastname>" and "<Email>"
    And pratik enters "<Password>" and "<ConfirmPassword>"
    When Pratik press register
    Then Pratik shall be taken to homepage

    Examples: 
 | Gender     | Firstname   | Lastname  | Email                  | Password  |  ConfirmPassword  |
 | Male       | Pratik      | Musale    | Pratik809123@gmail.com | Pratik123 |  Pratik123        |  
 | Female     | Pravir      | Kumar     | Pravir809213@gmail.com | Pravir123 |  Pravir123        |
