/// <reference types="cypress" />

describe('Sign In Scripts', () => {

    it('verify whether user is getting error message for invalid email', () => {
        cy.visit(`https://cloud.xara.com/?doc=J3DaQyiOmD`)
        cy.get('h4', { timeout: 60000 })
            .contains('Create an account', { matchCase: false })
            .should('be.visible')
        cy.get('a')
            .contains('Sign in', { matchCase: false })
            .click()

            cy.get('h4', { timeout: 60000 })
            .contains('Sign in', { matchCase: false })
            .should('be.visible')

        cy.get(`input[name='email']`)
            .type('nwabuonachisom@gmail.com')

        cy.get(`input[name='password']`)
            .type('3ft')

        cy.get('button')
            .contains('Sign in', { matchCase: false })
            .click()

        cy.get(`p[class='MuiFormHelperText-root Mui-error']`)
            .contains('The password is incorrect.', { matchCase: false })
            .should('be.visible')

        cy.get(`p[class='MuiFormHelperText-root Mui-error']`)
        .eq(1)
            //.contains(, { matchCase: false })
            .should('have.text','If you used to sign in with your Xara account email and password, please  get a new password  for use with Xara Cloud.')

    });



})