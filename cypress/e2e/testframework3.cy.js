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
            // have.value is the jquery method thst is used to get the value
        cy.get(':nth-child(4) > .ng-untouched').should('have.value', data1.name);

        // check whether the min length is 2 or not
        cy.get(':nth-child(1) > .form-control').should('have.attr', 'minlength', '2');
        // to check the disability
        cy.get('#inlineRadio3').should('be.disabled')
            // cy.selectprod("Blackberry")
    })

})