
it('Hover On Elements', ()=> {
    
    cy.visit('https://the-internet.herokuapp.com/hovers')
    .get('[class="example"]') 
    .should('contains.text', 'Hovers')
    .and('contains.text', 'Hover over the image for additional information')
    .get('[class="figure"]') .eq(0) .trigger('mousehover') 
    .get('[class="figcaption"]') .eq(0) .invoke('show')
    .should('contains.text', 'name: user1')
    .should('contains.text', 'View profile')
    .get('[href="/users/1"]')
    .should('contains.text', 'View profile' )
    .get('[class="figure"]') .eq(1) .trigger('mousehover') 
    .get('[class="figcaption"]') .eq(1) .invoke('show')
    .should('contains.text', 'name: user')
    .should('contains.text', 'View profile')
    .get('[href="/users/2"]')
    .should('contains.text', 'View profile' )
    .get('[class="figure"]') .eq(2) .trigger('mousehover') 
    .get('[class="figcaption"]') .eq(2) .invoke('show')
    .should('contains.text', 'name: user')
    .should('contains.text', 'View profile')
    .get('[href="/users/3"]')
    .should('contains.text', 'View profile' )


   
   
    
})