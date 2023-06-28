/// <reference types="Cypress" />

describe("here i write all the text cases", () => {
    let data1;
    before(function() {
        cy.fixture('example').then(function(element) {
            data1 = element;
        })
    })
    it("first test case", () => {
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        cy.get(':nth-child(2) > .nav-link').click()
        data1.prod.forEach(element => {
            cy.selectProductName(element);
        });
        cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
        let sum = 0;
        cy.get('tr td:nth-child(4) strong').each(($el, index, $list) => {
            cy.log($el.text());
            const amount = $el.text()
            var res = amount.split(" ")
            res = res[1].trim()
            sum = Number(sum) + Number(res);


        }).then(function() {
            cy.log(sum)
        });
        cy.get('h3 > strong').then(function(element) {
            const amount = element.text();
            var res = amount.split(" ")
            var total = res[1].trim()
            expect(Number(total)).to.equal(sum);
        })
    })
})