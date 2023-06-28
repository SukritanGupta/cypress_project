///<reference types="Cypress" />
// here i write the code to click the purchase button for the cashew product
describe("here i write my test cases", () => {
    it("first test", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.search-keyword')
        cy.wait(2000)

        cy.get('.products').as('productLocator')
        cy.get('.products').find('.product').each(($el, index, $list) => {
            const textVeg = $el.find('h4.product-name').text()
            if (textVeg.includes('Cashews')) {
                cy.wrap($el).find('button').click()
            }
        })
        cy.get('.cart-icon > img').click()
        cy.contains('PROCEED TO CHECKOUT').click()
            // cy.get('button').click()
        cy.get(':nth-child(14)').click()

    })

})