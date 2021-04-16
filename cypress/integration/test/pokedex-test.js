/// <reference types="cypress" />

const { contains } = require("jquery");

describe('Prueba pokedex', () => {

    it('comprueba que los datos del pokemon seleccionado, se encuentren vacios al iniciar la app', () => {
        cy.visit('http://127.0.0.1:8080');
        cy.get('#nombre').should('be.empty');
        cy.get('#altura').should('be.empty');
        cy.get('#peso').should('be.empty');
        cy.get('#habilidad').should('be.empty');

        
    })

    it('comprueba que al seleccionar un pokemon, se muestren los datos del mismo', () => {
        
        cy.wait(2000);
        const $listado = cy.get('.poke-listado');
        const poke1 = $listado.eq(0);
        const poke1id = poke1.id

        poke1.click();
        cy.get('#nombre').should('not.be.empty');
        

    })
})