Feature: Auto Wait
    As a user
    I want to verify the Auto Wait page behavior
    So that I can confirm Playwright waits until the target can be clicked

    Scenario: Click the target button after it becomes interactable
        Given I navigate to the UI Testing Playground home page
        When I open the Auto Wait page
        And I make the target button temporarily covered
        And I apply the 3 second auto wait settings
        And I click the auto wait target button
        Then the auto wait target should report it was clicked

    Scenario: Navigate to Auto Wait page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Auto Wait page
        Then the Auto Wait page should be displayed
