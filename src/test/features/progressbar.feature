Feature: Progress Bar
    As a user
    I want to verify the Progress Bar page behavior
    So that I can confirm the progress bar updates correctly and reaches completion

    Scenario: Navigate to the Progress Bar page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Progress Bar page
        Then the page title should contain "Progress Bar"

    Scenario: Progress bar starts at zero percent
        Given I navigate to the UI Testing Playground home page
        When I open the Progress Bar page
        Then the progress bar should display 0%

    Scenario: Progress bar updates when start button is clicked
        Given I navigate to the UI Testing Playground home page
        When I open the Progress Bar page
        And I click the start button
        Then the progress bar should start increasing

    Scenario: Progress bar reaches 100 percent completion
        Given I navigate to the UI Testing Playground home page
        When I open the Progress Bar page
        And I click the start button
        And I wait for the progress bar to complete
        Then the progress bar should display 100%
        And the completion message should be visible

    Scenario: Reset button returns progress bar to zero
        Given I navigate to the UI Testing Playground home page
        When I open the Progress Bar page
        And I click the start button
        And I wait for the progress bar to complete
        And I click the reset button
        Then the progress bar should display 0%
        And the completion message should not be visible
