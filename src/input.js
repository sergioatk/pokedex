import { Pokemon } from "./clases.js";


export let offset = 0;
export async function manejarInputLista(callbackAPI, callbackMostrarInfo) {
    const lista = document.querySelector('.list-group');
    lista.onclick = (e) => {
      const elemento = e.target;
      if (elemento.classList.contains('list-group-item')) {
        const infoPokemon = callbackAPI(elemento.dataset.nombre)
          .then((info) => {
            const nuevoPokemon = new Pokemon(info.name, info.weight, info.height, info.abilities, info.sprites.front_default);
            callbackMostrarInfo(nuevoPokemon);
          })
      }
    }
}

export async function manejarInputNavegacion(callbackAPI, callbackPopularLista, callbackCambiarNroPagina, pagina) {
    const botones = document.querySelectorAll('button');
    botones.forEach((boton) => {
      boton.onclick = function(e) {
        if (e.target.classList.contains('atras')) {
          if (offset === 0) {
            return
          } else {
            offset-= 20;
            callbackPopularLista(offset, callbackAPI);
            pagina--;
            callbackCambiarNroPagina(pagina);
          }
        } else if (e.target.classList.contains('adelante')) {
          offset += 20;
          callbackPopularLista(offset, callbackAPI);
          pagina++;
          callbackCambiarNroPagina(pagina);
        }
      }
    })
  }
  