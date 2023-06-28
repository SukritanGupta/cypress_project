/// <reference  types="Cypress" />
describe("here i write all test case", function() {

    it("first test", () => {
        cy.visit("https://google.com");
        cy.get('#APjFqb').type("welcome to code world {enter}")
        cy.get('#rso > :nth-child(1) > .g > .kvH3mc > .jGGQ5e > .yuRUbf > a > .LC20lb').click()
    })
})