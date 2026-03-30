Feature: Scrollbars
    As a user
    I want to verify that scrolling functionality works correctly
    So that I can ensure hidden elements become accessible through scrolling

    Scenario: Scroll to hidden button
        Given I navigate to the Scrollbars page
        Then the hidden button should not be in viewport
        When I scroll down to the button
        Then the button should be visible in the viewport

    Scenario: Click button after scrolling
        Given I navigate to the Scrollbars page
        When I scroll down to the button
        And I click on the scrolled button
        Then the page should display a success message

    Scenario: Scroll back to top
        Given I navigate to the Scrollbars page
        When I scroll down to the button
        And I scroll back to the top
        Then the button should not be in viewport
