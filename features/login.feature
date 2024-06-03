Feature: Login Functionality

  Scenario: Attempting login with locked-out user
    Given I am on the login page
    When I attempt to login with locked user
    Then I should see a generic error message indicating "Sorry, this user has been locked out."

  Scenario: Attempting login with incorrect credentials
    When I attempt to login with "1@2.com" and "f-o-o"
    Then I should see a generic error message indicating "Provided credentials do not match any user in this service."

  Scenario: Attempting login without providing user details
    When I attempt to login with "" and ""
    Then I should see a username error message indicating "Username is required"

  Scenario: Attempting login without providing a password
    When I attempt to login with "abc@example.com" and ""
    Then I should see a password error message indicating "Password is required"

  Scenario: Successful login with valid credentials
    When I attempt to login with valid user
    Then I should be redirected to the product catalog page
