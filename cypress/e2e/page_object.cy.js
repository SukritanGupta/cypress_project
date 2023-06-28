/// <reference types="Cypress" />

describe("here i write all my test cases", () => {
    before(function() {
        cy.log("before block run");
        let d1;
        cy.fixture('example', (data) => {
            d1 = data;
        })
    })
    it("first test case", () => {
        cy.log("here i write the first test case")

    })
})