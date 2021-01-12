$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("/Users/harke/class 2020/tanu_bdd/src/test/java/features/login.feature");
formatter.feature({
  "line": 1,
  "name": "Login Page",
  "description": "As a user I want a login page so that only\r\nauthentic user can have access",
  "id": "login-page",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 4,
  "name": "Valid users should be able to login",
  "description": "",
  "id": "login-page;valid-users-should-be-able-to-login",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 5,
  "name": "a valid user",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "user goes to techfios site",
  "keyword": "When "
});
formatter.step({
  "line": 7,
  "name": "techfios site should display",
  "keyword": "Then "
});
formatter.step({
  "line": 8,
  "name": "user logs in with valid credentials",
  "keyword": "When "
});
formatter.step({
  "line": 9,
  "name": "dashboard page should be displayed",
  "keyword": "Then "
});
formatter.step({
  "line": 10,
  "name": "username should match",
  "keyword": "And "
});
formatter.match({
  "location": "LoginSteps.a_valid_user()"
});
formatter.result({
  "duration": 121204800,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_goes_to_techfios_site()"
});
formatter.result({
  "duration": 6457234700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.techfios_site_should_display()"
});
formatter.result({
  "duration": 83424700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.user_logs_in_with_valid_credentials()"
});
formatter.result({
  "duration": 41700,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.dashboard_page_should_be_displayed()"
});
formatter.result({
  "duration": 34400,
  "status": "passed"
});
formatter.match({
  "location": "LoginSteps.username_should_match()"
});
formatter.result({
  "duration": 33400,
  "status": "passed"
});
});