/// <reference types="Cypress" />
// here I traverse inside the table and get the desired data and its alternative column
describe("here i write test cases", () => {
    it("here i write test cases", () => {
        cy.visit('https://rahulshettyacademy.com/AutomationPractice/');
        // first i write the code for handling the array of items 
        cy.get('tr td:nth-child(2)').each(($el, index, $list) => {
            const text = $el.text()
            if (text.includes("Python")) {
                cy.get("tr td:nth-child(2)").eq(index).next().then(function(price) {
                    const priceText = price.text();
                    expect(priceText).to.equal('25')
                })

            }
        })
    })
})