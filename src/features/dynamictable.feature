Feature: Dynamic Table
    As a user
    I want to verify the Dynamic Table page behavior
    So that I can confirm the Chrome CPU value matches the summary text

    Scenario: Navigate to the Dynamic Table page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Dynamic Table page
        Then the page title should contain "Dynamic Table"

    Scenario: Verify Chrome CPU value matches the summary
        Given I navigate to the UI Testing Playground home page
        When I open the Dynamic Table page
        Then the Chrome CPU value should match the yellow label
