///<reference types="Cypress" />
///<reference types="Cypress-iframe" />
import 'cypress-iframe';
describe("here i write all my test cases", () => {
    it("first test case", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.frameLoaded("#courses-iframe") // eq() method is used for the index getting 
        cy.iframe().find("a[href*='mentorship']").eq(0).click()
            // cy.iframe().find("h1[class*='pricing-title']").should('have.length', 2)
    })
})