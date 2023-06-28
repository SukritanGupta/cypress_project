// alliasing 
/// <reference types="Cypress" />

describe("here u write the test cases", () => {
    it("first test case", () => {
        // as command
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
        cy.get('.products').as('productLocator')
        cy.get('@productLocator').find('.product').should('have.length', 30)
        cy.get('.brand').should('have.text', 'GREENKART')
    })
})