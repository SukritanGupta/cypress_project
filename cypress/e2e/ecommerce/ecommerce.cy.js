/// <reference types="Cypress" />
import HomePage from '../pageObjects/HomePage'
import ProductPage from '../pageObjects/productsPage';
import { Given, When, Then, And } from "cypress-cucumber-preprocessor/steps";

Given('I open Ecomm Page', function() {
    cy.visit('https://rahulshettyacademy.com/angularpractice/')
})

// I add items to Cart 
When('I add items to Cart ', () => {
    HomePage.getShopTab().click();
    // d1.prod.forEach(element => {
    //     cy.selectProductName(element);
    // });
    // prodpage.checkOutButton().click();

})


And('Validate the total prices', () => {
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


// Then select the country submit and verify Thankyou
Then('select the country submit and verify Thankyou', () => {
    cy.get('#navbarResponsive > .navbar-nav > .nav-item > .nav-link').click()
    cy.get(':nth-child(4) > :nth-child(5) > .btn').click()
    cy.get('#country').type('India')
    cy.get('.suggestions > ul > li > a').click()
    cy.get('.checkbox > label').click()
    cy.get('.ng-untouched > .btn').click()
        // cy.get('.alert').should('have.text', 'Success! Thank you! Your order will be delivered in next few weeks :-).')
        // Text() and prop() are the jquery method
    cy.get('.alert').then(function(element) {
        const actualText = element.text();
        expect(actualText.includes("Success")).to.be.true
    })
})