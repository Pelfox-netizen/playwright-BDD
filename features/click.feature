Feature: Click
    As a user
    I want to verify the Click page behavior
    So that I can confirm the button responds to a real click interaction

    Scenario: Navigate to the Click page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Click page
        Then the page title should contain "Click"

    Scenario: Click the button on the Click page
        Given I navigate to the UI Testing Playground home page
        When I open the Click page
        And I click the bad button
        Then the bad button should turn green
