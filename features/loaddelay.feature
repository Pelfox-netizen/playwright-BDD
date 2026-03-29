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

    Scenario: Click button after it loads
        Given I navigate to the Load Delay page
        When I wait for the button to load
        And I click on the loaded button
        Then the page should display a success message

    Scenario: Verify load delay timeout handling
        Given I navigate to the Load Delay page
        When I set a timeout of 5 seconds
        And I wait for the button with timeout
        Then the button should be visible before timeout expires
