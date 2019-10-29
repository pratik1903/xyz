$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_h2a.06.17/eclipse-workspace/cucumbercasestudy/feature/DemoRegister.feature");
formatter.feature({
  "name": "Demo Web Shop Registration",
  "description": "  user want to register to the Demo Web Shop Website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.step({
  "name": "Pratik is on Demo Web Shop HomePage",
  "keyword": "Given "
});
formatter.step({
  "name": "Pratik clicks on register",
  "keyword": "When "
});
formatter.step({
  "name": "Pratik enters \"\u003cGender\u003e\" and  \"\u003cFirstname\u003e\" and \"\u003cLastname\u003e\" and \"\u003cEmail\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "pratik enters \"\u003cPassword\u003e\" and \"\u003cConfirmPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "Pratik press register",
  "keyword": "When "
});
formatter.step({
  "name": "Pratik shall be taken to homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Gender",
        "Firstname",
        "Lastname",
        "Email",
        "Password",
        "ConfirmPassword"
      ]
    },
    {
      "cells": [
        "Male",
        "Pratik",
        "Musale",
        "Pratik809123@gmail.com",
        "Pratik123",
        "Pratik123"
      ]
    },
    {
      "cells": [
        "Female",
        "Pravir",
        "Kumar",
        "Pravir809213@gmail.com",
        "Pravir123",
        "Pravir123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.step({
  "name": "Pratik is on Demo Web Shop HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoRegister.pratik_is_on_Demo_Web_Shop_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pratik clicks on register",
  "keyword": "When "
});
formatter.match({
  "location": "DemoRegister.pratik_clicks_on_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pratik enters \"Male\" and  \"Pratik\" and \"Musale\" and \"Pratik809123@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoRegister.pratik_enters_and_and_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pratik enters \"Pratik123\" and \"Pratik123\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoRegister.pratik_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pratik press register",
  "keyword": "When "
});
formatter.match({
  "location": "DemoRegister.pratik_press_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pratik shall be taken to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoRegister.pratik_shall_be_taken_to_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Successful Registration",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@Register"
    }
  ]
});
formatter.step({
  "name": "Pratik is on Demo Web Shop HomePage",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoRegister.pratik_is_on_Demo_Web_Shop_HomePage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pratik clicks on register",
  "keyword": "When "
});
formatter.match({
  "location": "DemoRegister.pratik_clicks_on_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pratik enters \"Female\" and  \"Pravir\" and \"Kumar\" and \"Pravir809213@gmail.com\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoRegister.pratik_enters_and_and_and(String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "pratik enters \"Pravir123\" and \"Pravir123\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoRegister.pratik_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pratik press register",
  "keyword": "When "
});
formatter.match({
  "location": "DemoRegister.pratik_press_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Pratik shall be taken to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoRegister.pratik_shall_be_taken_to_homepage()"
});
formatter.result({
  "status": "passed"
});
});