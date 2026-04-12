Feature: Mouse Over
    As a user
    I want to verify mouse-over-sensitive links
    So that I can confirm replaced links can still be clicked reliably

    Scenario: Navigate to the Mouse Over page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Mouse Over page
        Then the page title should contain "Mouse Over"

    Scenario: Click mouse-over links after they are replaced
        Given I navigate to the UI Testing Playground home page
        When I open the Mouse Over page
        And I click the Click me link twice
        And I click the Link Button link twice
        Then the Click me link count should be "2"
        And the Link Button link count should be "2"

    Scenario: Hovering the Click me link activates the replacement link
        Given I navigate to the UI Testing Playground home page
        When I open the Mouse Over page
        And I hover over the Click me link
        Then the Click me link should become active
        And the Click me link count should be "0"
