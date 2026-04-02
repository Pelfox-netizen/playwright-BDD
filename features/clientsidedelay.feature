Feature: Client Side Delay
    As a user
    I want to verify the Client Side Delay page behavior
    So that I can confirm delayed client-side updates are handled correctly

    Scenario: Navigate to the Client Side Delay page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Client Side Delay page
        Then the page title should contain "Client Side Delay"

    Scenario: Trigger delayed client-side calculation
        Given I navigate to the UI Testing Playground home page
        When I open the Client Side Delay page
        And I click the client side delay button
        Then the client side delay result should be displayed
