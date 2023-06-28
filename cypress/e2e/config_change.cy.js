/// <reference types="Cypress" />

describe('here i write all my test cases', () => {
    let data1;
    before(function() {
        cy.fixture('example').then(function(data) {
            data1 = data;
        })
    })
    it("here i write test cases", () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()
        data1.prod.forEach(element => {
            cy.selectProductName(element);
        });
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
        cy.get('#country').type('India')
        cy.get('.suggestions > ul > li > a').click()
        cy.get('.checkbox > label').click()
        cy.get('.ng-untouched > .btn').click()
            // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
            // Text() and prop() are the jquery method
        cy.get('.alert').then(function(element) {
            const actualText = element.text();
            expect(actualText.includes("Success")).to.be.true
        })
    })

})