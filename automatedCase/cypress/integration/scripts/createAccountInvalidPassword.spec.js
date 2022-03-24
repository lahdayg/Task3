/// <reference types="cypress" />

describe('Create Account Scripts', () => {

    it('verify whether user is getting error message for invalid password format', () => {
        cy.visit(`https://cloud.xara.com/?doc=J3DaQyiOmD`)
        cy.get('h4', { timeout: 60000 })
            .contains('Create an account', { matchCase: false })
            .should('be.visible')
        cy.get(`input[name='firstname']`)
            .type('Simon')
        cy.get(`input[name='lastname']`)
            .type('Jack')
        cy.get(`input[name='email']`)
            .type(`jack.simon@gmail.com`)

        cy.get(`input[name='password']`)
            .type('ter')

        cy.get('button')
            .contains('Create an account', { matchCase: false })
            .click()

        cy.get(`p.MuiFormHelperText-root`, { timeout: 5000 })
            .should('have.text', 'Please choose a password at least 8 characters long')
    });
})