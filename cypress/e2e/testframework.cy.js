/// <reference types="Cypress" />

describe("here i write all the test cases", () => {
    before(function() {
        // runs once before all the test under the describe
        cy.fixture('example').then(function(data) {
            this.data1 = data;
        })
    })
    it("first test case", () => {
        cy.visit("https://rahulshettyacademy.com/angularpractice/")
        cy.get(':nth-child(1) > .form-control').type(this.data1.name)
            // cy.get('select')
        cy.get('#exampleFormControlSelect1').select(this.data1.gender)
            // cy.get()
    })
})