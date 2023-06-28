/// <reference types="Cypress" />
import HomePage from './pageObjects/HomePage';
import productsPage from './pageObjects/productsPage';
describe("here i write my test cases", function() {
    let d1;
    before(function() {
        cy.fixture('example').then(function(data) {
            d1 = data;
        })
    })
    it('my first test case', function() {
        const homePage = new HomePage()
        const prodpage = new productsPage()
        cy.visit('https://rahulshettyacademy.com/angularpractice/')
        homePage.getEditBox().type(d1.name);
        cy.log("welcome to code world");
        homePage.getGender().select(d1.gender);
        homePage.getTwoWayDataBinding().should('have.value', d1.name);
        homePage.getEditBox().should('have.attr', 'minlength', '2');
        homePage.getEntrepreneaur().should('be.disabled');
        homePage.getShopTab().click();
        d1.prod.forEach(element => {
            cy.selectProductName(element);
        });
        prodpage.checkOutButton().click();
    });
});