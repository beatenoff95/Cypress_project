it('Dropwon list', ()=> {
cy.visit('https://the-internet.herokuapp.com/')
cy.get('[href="/dropdown"]') 
.click()
cy.get('#dropdown') .select('Option 1')
.should('contains.text', 'Option 1')
.wait(2000)
cy.get('#dropdown') .select('Option 2')
.should('contains.text', 'Option 2')
cy.contains("Please select an option")
.should('be.disabled')
})    