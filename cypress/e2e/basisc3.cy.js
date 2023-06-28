/// <reference types="Cypress" />

describe("here i write my text cases", () => {
    it("first text case", () => {
        cy.visit("https://rahulshettyacademy.com/seleniumPractise/#/")
            // this is jquery method to reterive the data
        cy.get('.brand').then(function(logoelement) {
            cy.log(logoelement.text()) // text() is the jquery method


        })
    })
})