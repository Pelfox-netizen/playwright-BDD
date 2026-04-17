Feature: Text Input
    As a user
    I want to verify the Text Input page behavior
    So that I can confirm typed text updates the button name

    Scenario: Update the button name from text input
        Given I navigate to the UI Testing Playground home page
        When I open the Text Input page
        And I enter a new button name
        And I click the updating button
        Then the updating button should display the new name
