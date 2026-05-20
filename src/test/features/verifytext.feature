Feature: Verify Text
    As a user
    I want to verify text matching on the Verify Text page
    So that I can confirm rendered text is found correctly despite DOM whitespace

    Scenario: Navigate to the Verify Text page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Verify Text page
        Then the page title should contain "Verify Text"

    Scenario: Verify the welcome text using normalized text
        Given I navigate to the UI Testing Playground home page
        When I open the Verify Text page
        Then the welcome message should be visible

    Scenario: Verify that the page contains the expected heading
        Given I navigate to the UI Testing Playground home page
        When I open the Verify Text page
        Then the page should contain the text "Welcome"

    Scenario: Verify that the page does not contain unexpected text
        Given I navigate to the UI Testing Playground home page
        When I open the Verify Text page
        Then the page should not contain the text "Error"

    Scenario: Verify text with different case variations
        Given I navigate to the UI Testing Playground home page
        When I open the Verify Text page
        Then the page should contain the text "welcome"
