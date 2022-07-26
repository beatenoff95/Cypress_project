it('Hover On Elements', ()=> {
    
cy.visit('https://the-internet.herokuapp.com/jqueryui/menu#')
cy.get('[role="menuitem"]')
.should('be.disabled')

})    