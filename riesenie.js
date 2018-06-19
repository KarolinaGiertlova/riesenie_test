describe('uloha', function() {
	//beforeEach(function() {
		//cy.visit('http://automationpractice.com/index.php')
	//})
	it('shopping', function() {
		cy.visit('http://automationpractice.com/index.php')
		
		cy.contains('Sign in').click()
		cy.get('.col-sm-6').first().next().as('registred')
		
		
		cy.get('@registred').find('div>input').type('e2e@cypress.com')
		cy.get('@registred').find('div>div').first().next().find('input').type('password')
		cy.get('@registred').contains('Sign in').click()
		
		
		cy.contains('Women').click()
		//cy.contains('Dresses').should('not.be.visible').click({force:true})
		cy.get('#subcategories').contains('Dresses').click()
		
		cy.get('.ajax_block_product').first().next().contains('Add to cart').click()
		cy.get('.ajax_cart_quantity').should('contain', '1')
		
		
		cy.contains('Proceed to checkout').click()
		cy.get('#cart_summary').find('tbody>tr').should('have.id', 'product_4_16_0_74294')
		//cy.get('#cart_summary').should('not.be.empty')
		
		cy.get('.cart_quantity_delete').click()
		cy.get('.alert-warning').should('be.visible')
		
	})
})