Feature: Sample App
    As a user
    I want to verify the Sample App page behavior
    So that I can confirm login and logout work with the sample credentials

    Scenario: Navigate to the Sample App page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Sample App page
        Then the page title should contain "Sample App"

    Scenario: Log in and log out of the Sample App
        Given I navigate to the UI Testing Playground home page
        When I open the Sample App page
        And I enter valid Sample App credentials
        And I submit the Sample App login form
        Then the Sample App should show a successful login message
        When I log out of the Sample App
        Then the Sample App should show the logged out state
