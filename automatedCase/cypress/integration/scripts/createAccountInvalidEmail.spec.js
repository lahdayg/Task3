/// <reference types="cypress" />

describe('Create Account Scripts', () => {

    it('verify whether user is getting error message for invalid email', () => {
        cy.visit(`https://cloud.xara.com/?doc=J3DaQyiOmD`)
        cy.get('h4', { timeout: 60000 })
            .contains('Create an account', { matchCase: false })
            .should('be.visible')
        cy.get(`input[name='firstname']`)
            .type('Damon')
        cy.get(`input[name='lastname']`)
            .type('toughel')
        cy.get(`input[name='email']`)
            .type('toughel.damon12@')

        cy.get(`input[name='password']`)
            .type('toughe123@')

        cy.get('button')
            .contains('Create an account', { matchCase: false })
            .click()

        cy.get(`p.MuiFormHelperText-root`, { timeout: 5000 })
            .should('have.text', 'Invalid email format, please try again.')
    });

})