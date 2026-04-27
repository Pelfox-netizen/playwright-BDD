Feature: Non-Breaking Space
    As a user
    I want to verify the Non-Breaking Space page behavior
    So that I can confirm non-breaking spaces are handled correctly

    Scenario: Verify non-breaking space text is displayed
        Given I navigate to the UI Testing Playground home page
        When I open the Non-Breaking Space page
        Then the complete text with non-breaking spaces should be visible

    Scenario: Verify text remains on single line with non-breaking space
        Given I navigate to the UI Testing Playground home page
        When I open the Non-Breaking Space page
        Then the text should remain on a single line without wrapping
