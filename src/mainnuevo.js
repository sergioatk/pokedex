import { reiniciarListado, dibujarListado } from "./ui.js";





let paginaActual = 0;

let paginaAnterior;
let paginaSiguiente;

async function buscarEnAPI(parametro = 0) {

    const URL_BASE = 'https://pokeapi.co/api/v2/pokemon/';

    if (typeof parametro === 'number') {
        const LLAMADA_API = await fetch(`${URL_BASE}?offset=${parametro}&limit=20`);
        const json = await LLAMADA_API.json();
        
        return json;
    }

    if (typeof parametro === 'string') {
        

        const LLAMADA_API = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
        const json = LLAMADA_API.json();
        return json;
    }
}







async function manejarListado(nroPag) {
    const nuevoListado = await buscarEnAPI(nroPag);
    dibujarListado(nuevoListado);
}








async function mostrarInfoPokemon(nombrePokemon) {
    const $nombre = document.querySelector('#nombre');
    const $altura = document.querySelector('#altura');
    const $peso = document.querySelector('#peso');
    const $habilidades = document.querySelector('#habilidades')

    const pokemonSeleccionado = await buscarEnAPI(nombrePokemon);

    $nombre.textContent = pokemonSeleccionado.name;
    $altura.textContent = pokemonSeleccionado.height;
    $peso.textContent = pokemonSeleccionado.weight;
    
    $habilidades.textContent = '';

    pokemonSeleccionado.abilities.forEach(function(habilidades) {
            
            if (!$habilidades.textContent) {
                $habilidades.textContent = habilidades.ability.name;
                
            } else {
                $habilidades.textContent += `, ${habilidades.ability.name}`;
                
            }
            
        })
    
}

function manejarInputUsuario() {
    const $pokedex = document.querySelector('#pokedex');

    $pokedex.onclick = (e) => {

        

        const elementoClickeado = e.target;

        if (elementoClickeado.classList.contains('item-lista')) {
            mostrarInfoPokemon(elementoClickeado.dataset.nombre);

            ///console.log(elementoClickeado.dataset.nombre);
            
        }

        if (elementoClickeado.classList.contains('navegacion')) {
            
        }


        if (e.target.textContent.toLowerCase() === 'siguiente') {
            manejarNav(true);
            
        } else if (e.target.textContent.toLowerCase() === 'atras') {
            manejarNav(false);
            
    }

    return false;
    }
}

function manejarNav(direccion) {
    
    if (direccion === true) {
        paginaActual += 20;
        
        manejarListado(paginaActual);
    }

    if (direccion === false) {
        if (paginaActual === 0) {
            return
        }
        
        paginaActual -= 20;
        manejarListado(paginaActual);
        
       
    }

}


manejarInputUsuario();
manejarListado();
