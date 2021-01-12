Feature: Login Page
	As a user I want a login page so that only
		authentic user can have access
Scenario: Valid users should be able to login
Given a valid user 
When user goes to techfios site 
Then techfios site should display 
When user logs in with valid credentials
Then dashboard page should be displayed 
And username should match

