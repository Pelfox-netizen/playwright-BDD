Feature: Shadow DOM
    As a user
    I want to verify the Shadow DOM page behavior
    So that I can confirm interactions inside the shadow root work correctly

    Scenario: Navigate to the Shadow DOM page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Shadow DOM page
        Then the page title should contain "Shadow DOM"

    Scenario: Generate and copy a guid from the Shadow DOM component
        Given I navigate to the UI Testing Playground home page
        When I open the Shadow DOM page
        And I generate a guid in the Shadow DOM component
        And I copy the guid from the Shadow DOM component
        Then the clipboard value should match the generated guid
