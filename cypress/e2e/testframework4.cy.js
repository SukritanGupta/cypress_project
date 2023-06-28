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
        cy.log(data1.prod)
            // here i write the concept of the cy.pause()
            // cy.pause()
        cy.get(':nth-child(2) > .nav-link').click()
            // cy.selectProductName("Blackberry")
        data1.prod.forEach(element => {
            cy.selectProductName(element);
        });
    });
})