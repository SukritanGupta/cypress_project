beforeEach(() => {
    cy.fixture('example').then(function(data) {
        this.d1 = data
    })
});