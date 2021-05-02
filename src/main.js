import { Pokemon } from './clases.js';
import { pedirDatos } from "./api.js";
import { popularLista, mostrarInformacionPokemon, numeroPagina, mostrarNumeroPagina } from './ui.js'
import { manejarInputLista, manejarInputNavegacion, offset } from './input.js'

popularLista(offset, pedirDatos);
manejarInputLista(pedirDatos, mostrarInformacionPokemon);
manejarInputNavegacion(pedirDatos, popularLista, mostrarNumeroPagina, numeroPagina);
