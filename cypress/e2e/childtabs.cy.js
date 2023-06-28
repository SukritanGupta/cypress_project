/// <reference types="Cypress" />
// here i tell you the concept of the handling the child tabs (like moving from home to about)
describe("here write my test cases", () => {
    it("first test", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get("#opentab").invoke('removeAttr', 'target').click() //removeAttr -->jquery function

    })

})