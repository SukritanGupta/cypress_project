/// <reference types="Cypress" />


describe("here i write all my test cases", () => {
    it("first test case", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            // here i tell you the concept of the clicking one specific product 
        cy.get('.products').find('.product').should('have.length', 30)
            // for the 2nd button i want to click the second products
        cy.get('.products').find('.product').eq(2).contains('ADD TO CART').click()
        cy.get(':nth-child(3) > .stepper-input > .increment').click()

        // according the name ,click the product
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
    })
})