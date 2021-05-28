Feature: Login Test
  Scenario Outline: Login with invalid user name

    When I enter invalid username "<username>"
    And I enter the password as "<password>"
    And I Login
    Then I should get error message "<error>"

    Examples:
      | username |password| error|
      |invalidUsername| secret_sauce| Username and password do not match any user in this server|


  Scenario Outline: Login with invalid password

    When I enter invalid username "<username>"
    And I enter the password as "<password>"
    And I Login
    Then I should get error message "<error>"
    Examples:
      | username | password | error |
      | invalidUsername| secret_sauce| Username and password do not match any user in this server|


  Scenario Outline: Login with valid user and valid password

    When I enter valid username "<username>"
    And I enter the password as "<password>"
    And I Login
    Then I successfully logon with success message "<success_message>"
    Examples:
      | username | password | success_message |
      | standard_user| secret_sauce| PRODUCTS|