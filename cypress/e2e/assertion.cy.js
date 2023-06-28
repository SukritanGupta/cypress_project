/// <reference types="Cypress"/>

describe("here i write all my test cases", () => {
    it("first test", () => {
        // here i write all the implicit assertions
        cy.visit("https://trytestingthis.netlify.app/")
        cy.get('[href="index.html"]').should('have.class', 'button bar-item')
            // here i tell you the concept of the should-contain
        cy.get('[href="index.html"]').should('contain', "Home")
            // should-be 
        cy.get('[href="index.html"]').should('be.visible')
            // here i tell you the concept of the equal
        cy.get('[href="index.html"]').invoke('attr', 'class').should('equal', 'button bar-item')
            // here i tell you the concept of chainig the assertions 
        cy.get('[href="index.html"]').should('contain', 'Home').and('be.visible')

        // now i will write the explicit assertions here 
        let name = "aman";
        expect(name).to.be.equal('aman');
        expect(name).to.be.a['string'];
        expect(true).to.be.true;
        expect(true).to.be.true;

        // assert 
        assert.equal(4, '4', "equal")
        assert.strictEqual(4, 4, "not equal")
        assert.notEqual(4, '5', 'not equal')
        assert.isNumber(4)
    })
})