Feature: Load Delays
    As a user
    I want to verify that the application properly handles elements that load after a delay
    So that I can ensure the application responds correctly to asynchronous loading

    Scenario: Wait for button to load after delay
        Given I navigate to the Load Delay page
        Then the button should not be visible initially
        When I wait for the button to load
        Then the button should be visible
        And the button should be clickable

    Scenario: Verify the Load Delay page title
        Given I navigate to the Load Delay page
        Then the page title should contain "Load Delay"
