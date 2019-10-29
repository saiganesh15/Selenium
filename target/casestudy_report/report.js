$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_H2a.06.17/Desktop/Selenium/CaseStudies/Features/CaseStudy1.feature");
formatter.feature({
  "name": "DemoWeb Shop Registration",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "Multiple User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on demowebshop",
  "keyword": "Given "
});
formatter.step({
  "name": "Chooses to click on register",
  "keyword": "And "
});
formatter.step({
  "name": "User enters the details \"\u003cgender\u003e\" and \"\u003cfname\u003e\" and \"\u003clname\u003e\" and \"\u003cemail\u003e\" and \"\u003cpassword\u003e\" and \"\u003ccpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "Clicks on register",
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
        "gender",
        "fname",
        "lname",
        "email",
        "password",
        "cpassword"
      ]
    },
    {
      "cells": [
        "male",
        "karthik",
        "kar",
        "karthik456789@gmail.com",
        "karthik45678",
        "karthik45678"
      ]
    },
    {
      "cells": [
        "male",
        "anikhil",
        "khil",
        "anikhil789@gmail.com",
        "nikhil12378",
        "nikhil12378"
      ]
    },
    {
      "cells": [
        "female",
        "acath",
        "cath",
        "acath789@gmail.com",
        "cathy12378",
        "cathy12378"
      ]
    }
  ]
});
formatter.scenario({
  "name": "Multiple User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on demowebshop",
  "keyword": "Given "
});
formatter.match({
  "location": "CS1.user_is_on_demowebshop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Chooses to click on register",
  "keyword": "And "
});
formatter.match({
  "location": "CS1.chooses_to_click_on_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the details \"male\" and \"karthik\" and \"kar\" and \"karthik456789@gmail.com\" and \"karthik45678\" and \"karthik45678\"",
  "keyword": "When "
});
formatter.match({
  "location": "CS1.user_enters_the_details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on register",
  "keyword": "And "
});
formatter.match({
  "location": "CS1.clicks_on_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He sees his user homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "CS1.he_sees_his_user_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiple User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on demowebshop",
  "keyword": "Given "
});
formatter.match({
  "location": "CS1.user_is_on_demowebshop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Chooses to click on register",
  "keyword": "And "
});
formatter.match({
  "location": "CS1.chooses_to_click_on_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the details \"male\" and \"anikhil\" and \"khil\" and \"anikhil789@gmail.com\" and \"nikhil12378\" and \"nikhil12378\"",
  "keyword": "When "
});
formatter.match({
  "location": "CS1.user_enters_the_details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on register",
  "keyword": "And "
});
formatter.match({
  "location": "CS1.clicks_on_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He sees his user homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "CS1.he_sees_his_user_homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "Multiple User Registration",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "User is on demowebshop",
  "keyword": "Given "
});
formatter.match({
  "location": "CS1.user_is_on_demowebshop()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Chooses to click on register",
  "keyword": "And "
});
formatter.match({
  "location": "CS1.chooses_to_click_on_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "User enters the details \"female\" and \"acath\" and \"cath\" and \"acath789@gmail.com\" and \"cathy12378\" and \"cathy12378\"",
  "keyword": "When "
});
formatter.match({
  "location": "CS1.user_enters_the_details_and_and_and_and_and(String,String,String,String,String,String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Clicks on register",
  "keyword": "And "
});
formatter.match({
  "location": "CS1.clicks_on_register()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "He sees his user homepage",
  "keyword": "Then "
});
formatter.match({
  "location": "CS1.he_sees_his_user_homepage()"
});
formatter.result({
  "status": "passed"
});
});