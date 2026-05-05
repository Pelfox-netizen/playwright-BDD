Feature: Alerts
    As a user
    I want to handle browser alerts, confirmations, and prompts
    So that I can confirm dialog interactions work without manual steps

    Scenario: Handle alert, confirm, and prompt dialogs
        Given I navigate to the UI Testing Playground home page
        When I open the Alerts page
        And I handle the alert dialog
        And I accept the confirm dialog
        And I answer the prompt dialog with "dogs"
        Then the Alerts dialogs should be handled successfully

    Scenario: Dismiss confirm dialog without accepting it
        Given I navigate to the UI Testing Playground home page
        When I open the Alerts page
        And I handle the alert dialog
        And I dismiss the confirm dialog
        Then the confirm dialog should be rejected
