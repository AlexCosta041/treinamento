/// <reference types="cypress" />

describe('Autenticação', () => {

    it('Efetua login com usuário e senha válidos', () => {
        cy.visit('/')

        //cy.get('.nav-link').contains('Sign in').click() Outra forma
        cy.get('[href*=login]').contains('Sign in').click()

        const user =Cypress.env('user').email
        const pass=Cypress.env('user').password

        cy.get('input[type=email]').type(user)
        cy.get('input[type=password]').type(pass)

        cy.get('button.btn-primary').click()

        cy.get('.nav-pills a.nav-link').should('have.length', 2)

        cy.get('.nav-pills a.nav-link').eq(0).should('contain.text', 'Your Feed')

      //  cy.get('.nav-pills a.nav-link').first().should('contain.text', 'Your Feed') segunda forma de utilizar



        
    });
    
});