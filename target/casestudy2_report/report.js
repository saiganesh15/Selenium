$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_H2a.06.17/Desktop/Selenium/CaseStudies/Features/CaseStudy2.feature");
formatter.feature({
  "name": "DemoWeb Shop Login Verification",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Login with registered username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on DemoWeb Homepage",
  "keyword": "Given "
});
formatter.step({
  "name": "Choose to Click on login link",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the details \"\u003cuser\u003e\" and \"\u003cpass\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.step({
  "name": "He sees his user homepage",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ]
    },
    {
      "cells": [
        "karthik456789@gmail.com",
        "karthik45678"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Login with registered username and password",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on DemoWeb Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "CS2.user_is_on_DemoWeb_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Choose to Click on login link",
  "keyword": "And "
});
formatter.match({
  "location": "CS2.choose_to_Click_on_login_link()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the details \"karthik456789@gmail.com\" and \"karthik45678\"",
  "keyword": "When "
});
formatter.match({
  "location": "CS2.user_enters_the_details_and(String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on login button",
  "keyword": "And "
});
formatter.match({
  "location": "CS2.clicks_on_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He sees his user homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "CS2.He_sees_his_user_homepage()"
});
formatter.result({
  "status": "passed"
});
});