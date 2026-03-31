Feature: Visibility
    As a user
    I want to verify that hidden element states are handled correctly
    So that I can confirm the Visibility page behaves as expected

    Scenario: Navigate to the Visibility page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Visibility page
        Then the page title should contain "Visibility"

    Scenario: Hide button updates element visibility states
        Given I navigate to the UI Testing Playground home page
        When I open the Visibility page
        And I click the Hide button
        Then the removed button should be hidden
        And the zero width button should be hidden
        And the transparent button should be hidden
        And the invisible button should be hidden
        And the not displayed button should be hidden
        And the offscreen button should be outside the viewport
        And the overlapped button should remain visible
