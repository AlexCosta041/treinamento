
Given(/^que eu acesso o site$/, () => {
	cy.visit('/')
});

When(/^desejo realizar um login$/, () => {
	cy.get('.nav-link').contains('Sign in').click()
});

When(/^preencher os campos email e password$/, () => {

    const user='alex@teste.com.br'
    const pass='softplan'

	cy.get('input[type=email]').type(user)
    cy.get('input[type=password]').type(pass)
});

When(/^clicar Sing in$/, () => {
	cy.get('button.btn-primary').click()
});

Then(/^Abri o site$/, () => {
    cy.get('.nav-pills a.nav-link').should('have.length',2)
	cy.get('.nav-pills a.nav-link').eq(0).should('contain.text', 'Your Feed')
});
