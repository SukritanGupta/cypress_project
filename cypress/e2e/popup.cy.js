/// <reference types="Cypress" />


describe("here i write my test cases", () => {
    it("first test case", () => {
        cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
        cy.get('#alertbtn').click();
        cy.get('[value="Confirm"]').click()
            // windows alert 
        cy.on('window:alert', (str) => {
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        });
        cy.on('window:confirm', (str) => {
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        });
    })
})