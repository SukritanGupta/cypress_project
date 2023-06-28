Feature: End to end Ecommerce validation

    application regression

    Scenario: Ecommerce products delivery
    Given I open Ecomm Page 
    When I add items to Cart 
    And Validate the total prices
    Then select the country submit and verify Thankyou 

    # Scenario: Filling the form to shop
    # Given I open Ecommerce Page
    # When I fill the form details
    # |name | gender |
    # |bobz | Male   |
    # Then validate the forms behaviour
    # And select the Shop Page

