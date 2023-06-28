/// <reference types="Cypress" />

describe("here i write my test cases", () => {
    var data1;
    before(function() {
        cy.fixture('example', (ele) => {
            data1 = ele;
        })

    })
    it("here i write first test case", () => {

        cy.visit(Cypress.env('url') + "/angularpractice/")
            // use config js variables 
        Cypress.config('defaultCommandTimeout', 8000)
    })
})