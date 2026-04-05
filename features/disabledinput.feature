Feature: Disabled Input
    As a user
    I want to verify the Disabled Input page behavior
    So that I can confirm the edit field becomes enabled and accepts text

    Scenario: Navigate to the Disabled Input page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Disabled Input page
        Then the page title should contain "Disabled Input"

    Scenario: Enable the input field and enter text
        Given I navigate to the UI Testing Playground home page
        When I open the Disabled Input page
        And I trigger the delayed enable action
        Then the disabled input should become enabled
        When I enter text into the disabled input
        Then the disabled input should contain the entered text
