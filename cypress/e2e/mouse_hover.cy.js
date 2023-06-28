/// <reference types="Cypress" />
// cypress does not support mousehover 
// but cypress have jquery

// show method should be applied on the immediate Parent of hidden element
// this method is used to handle the invisible mode element
describe("here i write my test cases", () => {
    it('My first test case', function() {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/')
        cy.get("div.mouse-hover-content").invoke('show') //always implemented in the immediate child
        cy.contains('Top').click();
        cy.url().should('include', 'top')
    })
})