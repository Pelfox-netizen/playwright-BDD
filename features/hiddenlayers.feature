Feature: Hidden Layers
    As a user
    I want to verify the Hidden Layers page behavior
    So that I can confirm inactive overlapped elements are not interacted with

    Scenario: Navigate to the Hidden Layers page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Hidden Layers page
        Then the page title should contain "Hidden Layers"

    Scenario: The green button should not be clickable twice
        Given I navigate to the UI Testing Playground home page
        When I open the Hidden Layers page
        And I click the green button on the Hidden Layers page
        Then the green button should be covered by another layer
