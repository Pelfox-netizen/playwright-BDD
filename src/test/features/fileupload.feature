Feature: File Upload
    As a user
    I want to verify the File Upload page behavior
    So that I can confirm files are uploaded correctly

    Scenario: Upload a file successfully
        Given I navigate to the UI Testing Playground home page
        When I open the File Upload page
        And I upload a test file
        Then the file upload should be successful and display the file name
