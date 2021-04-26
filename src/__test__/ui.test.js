/// <reference types="Jest" />

import { TestScheduler } from '@jest/core';
import { numeroPagina, popularLista, mostrarInformacionPokemon, mostrarNumeroPagina } from '../ui.js';

test('comprueba que numero pagina sea 1 al empezar la app', () => {
    expect(numeroPagina).toBe(1);
});

test('mostrarInformacionPokemon debe recibir un objeto y mostrarlo', () => {

    document.body.innerHTML = `
    <input id="nombre"/>
    <input id="altura"/>
    <input id="peso"/>
    <input id="habilidades"/>
    <img/>`;

    const $nombre = document.querySelector('#nombre');
    const $altura = document.querySelector('#altura');
    const $peso = document.querySelector('#peso');
    const $habilidades = document.querySelector('#habilidades');
    const $imagen = document.querySelector('img');
    
    const pokemon = {
        name: 'bulbasaur',
        height: 20,
        weight: 15,
        abilities: [
            { ability: 
                { name: 'correr' }
            }
            
        ],
        sprites: {
            front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png',
        }
    };

    
    mostrarInformacionPokemon(pokemon)
    expect($nombre.textContent).toBe('bulbasaur');
    expect($nombre.textContent).not.toBe('pikachu');

    expect(Number($altura.textContent)).toEqual(20);
    expect(Number($altura.textContent)).not.toBe(10);

    expect(Number($peso.textContent)).toBe(15);
    expect(Number($peso.textContent)).not.toBe(120);

    expect($habilidades.textContent).toBe('correr');
    expect($habilidades.textContent).not.toBe('pararse de manos');
})