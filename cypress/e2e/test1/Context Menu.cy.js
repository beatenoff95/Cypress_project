it('Context Menu', ()=> {
cy.visit('https://the-internet.herokuapp.com/')  
cy.get('[href="/context_menu"]') .click()
cy.get('#hot-spot') .rightclick() .invoke('trigger', 'contextmenu')


})
