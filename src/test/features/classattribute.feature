Feature: Class Attribute
    As a user
    I want to verify the Class Attribute page behavior
    So that I can confirm the dynamic class-based button interaction works correctly

    Scenario: Navigate to the Class Attribute page from home
        Given I navigate to the UI Testing Playground home page
        When I open the Class Attribute page
        Then the page title should contain "Class Attribute"

    Scenario: Click the blue button on the Class Attribute page
        Given I navigate to the UI Testing Playground home page
        When I open the Class Attribute page
        And I click the class attribute button
        Then an alert should be displayed for the class attribute button
