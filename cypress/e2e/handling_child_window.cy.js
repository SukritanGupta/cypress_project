/// <reference types="Cypress" />
// here we learn about getting the attribute value
// cypress does not allow crossdomain automation
describe("here i write test cases", () => {
    it("my first test case", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
            // non cypress command cannot concatenate with the cypress command
        cy.get("#opentab").then(function(el) {
            const url = el.prop('href')
            cy.visit(url);
            cy.origin(url, () => { //all operation of the new url perform under the origin function
                cy.get("div.sub-menu-bar a[href*='about']").click()
            });

        })
    })
})