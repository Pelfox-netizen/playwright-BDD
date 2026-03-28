Feature: Lighthouse AI Homepage
  As a user
  I want to verify the Lighthouse AI home page
  So that I can confirm it's working properly

  Scenario: Homepage loads successfully
    Given I navigate to the Lighthouse AI home page
    Then the page should be visible

  Scenario: Homepage has proper title
    Given I navigate to the Lighthouse AI home page
    Then the page title should contain "Lighthouse"

  Scenario: Navigate to Resources Press Releases and verify page title
    Given I navigate to the Lighthouse AI home page
    When I click on the Resources Press Releases link
    Then the page title should contain "Press Releases"

  Scenario: Navigate to About/Company and verify page title
    Given I navigate to the Lighthouse AI home page
    When I click on the About Company link
    Then the page title should contain "About Us"
