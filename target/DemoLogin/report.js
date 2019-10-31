$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_h2a.06.17/eclipse-workspace/cucumbercasestudy/feature/DemoLogin.feature");
formatter.feature({
  "name": "Demo Shop Login",
  "description": "  John wants to login to Demo Web Shop",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DemoLogin"
    }
  ]
});
formatter.step({
  "name": "John is on Demo Web Shop page",
  "keyword": "Given "
});
formatter.step({
  "name": "John clicks on Login",
  "keyword": "When "
});
formatter.step({
  "name": "John enters \"\u003cEmail\u003e\" and \"\u003cPassword\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "John clicks on login",
  "keyword": "When "
});
formatter.step({
  "name": "John shall be taken to homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "Email",
        "Password"
      ]
    },
    {
      "cells": [
        "Pratik12378@gmail.com",
        "Pratik123"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Successful Login",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@DemoLogin"
    }
  ]
});
formatter.step({
  "name": "John is on Demo Web Shop page",
  "keyword": "Given "
});
formatter.match({
  "location": "DemoLogin.john_is_on_Demo_Web_Shop_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "John clicks on Login",
  "keyword": "When "
});
formatter.match({
  "location": "DemoLogin.john_clicks_on_Login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "John enters \"Pratik12378@gmail.com\" and \"Pratik123\"",
  "keyword": "And "
});
formatter.match({
  "location": "DemoLogin.john_enters_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "John clicks on login",
  "keyword": "When "
});
formatter.match({
  "location": "DemoLogin.john_clicks_on_login()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "John shall be taken to homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "DemoLogin.john_shall_be_taken_to_homepage()"
});
formatter.result({
  "status": "passed"
});
});