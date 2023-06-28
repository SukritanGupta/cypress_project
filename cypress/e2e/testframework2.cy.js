/// <reference types="Cypress" />

describe("here i write test cases", () => {
    let data1;
    before(() => {
        cy.fixture('example').then((data) => {

            data1 = data;
        })

    })
    it("here i write test cases", () => {
        cy.log(data1)
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(1) > .form-control').type(data1.name)
        cy.get('#exampleFormControlSelect1').select(data1.gender)

    })

})