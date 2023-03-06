Feature: Password requirements for new members
    As a user
    I want to see that the password field requires at least 6 and no more than 10 characters for new member registrations
    So that I can be confident in the security of my account

    Background:
        Given I am on the registration page

    Scenario: Password is too short
        When I enter a password with less than 6 characters
        Then I should see an error message stating that the password must be at least 6 characters long

    Scenario: Password is too long
        When I enter a password with more than 10 characters
        Then I should see an error message stating that the password must be no more than 10 characters long

    Scenario: Password has exactly 6 characters
        When I enter a password with exactly 6 characters
        Then I should be able to submit the registration form successfully

    Scenario: Password has exactly 10 characters
        When I enter a password with exactly 10 characters
        Then I should be able to submit the registration form successfully
