Feature: Validate Products functions

  Scenario Outline: Validate product info on Products page
    Given I am Login with a valid username and valid password
    Then the product is listed with title "<title>" and price "<price>"
    Examples:
      | title | price |
      | Sauce Labs Bolt T-shirt| $15.99|


  Scenario Outline: Validate product info on product details page

    Given I am logged in
    When I click title "<title>"
    Then I should be on product details page with title "<title>",price "<price>" and description "<description>"
    Examples:
      | title | price | description |
      |Sauce Labs Backpack | $29.99| carry all the things with the sleek|


