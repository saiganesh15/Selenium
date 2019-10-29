$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("C:/Users/Training_H2a.06.17/Desktop/Selenium/CaseStudies/Features/CaseStudy4.feature");
formatter.feature({
  "name": "Checking No of items in cart",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "Invalid Add to Cart",
  "description": "",
  "keyword": "Scenario"
});
formatter.step({
  "name": "Alex is on DemoWeb Shop Homepage",
  "keyword": "Given "
});
formatter.match({
  "location": "CS4.Alex_is_on_DemoWeb_Shop_Homepage()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Login to his account",
  "keyword": "And "
});
formatter.match({
  "location": "CS4.Login_to_his_account()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alex clicks on Shopping Cart",
  "keyword": "When "
});
formatter.match({
  "location": "CS4.Alex_clicks_on_Shopping_Cart()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "Alex sees Your Shopping Cart is empty",
  "keyword": "Then "
});
formatter.match({
  "location": "CS4.Alex_sees_Your_Shopping_Cart_is_empty()"
});
formatter.result({
  "status": "passed"
});
});