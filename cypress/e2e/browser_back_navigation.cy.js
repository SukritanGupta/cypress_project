/// <reference types="Cypress" />

// describe("here i write test case", () => {
//     it("here i write first test case", () => {
//         cy.visit("https://rahulshettyacademy.com/AutomationPractice/")
//             //    here i tell you the concept of back navigation
//         cy.get('#opentab').invoke('removeAttr', 'target').click()
//             //   for backing to the rahulpage
//         cy.url().should('include', 'qaclickacademy')
//         cy.go('back')
//     })
// })

describe('My Second Test Suite', function() {

    it('My FirstTest case', function() {

        //Check boxes
        cy.visit("http://qaclickacademy.com/practice.php")
        cy.get('#alertbtn').click()
        cy.get('[value="Confirm"]').click()
            //window:alert
        cy.on('window:alert', (str) => {
            //Mocha
            expect(str).to.equal('Hello , share this practice page and share your knowledge')
        })

        cy.on('window:confirm', (str) => {
            //Mocha
            expect(str).to.equal('Hello , Are you sure you want to confirm?')
        })

        cy.get('#opentab').invoke('removeAttr', 'target').click()

        cy.url().should('include', 'qaclickacademy')

        cy.go('back')
    })
})