export let offset = 0;
export async function manejarInputLista(callbackAPI, callbackMostrarInfo) {
    const lista = document.querySelector('.list-group');
    lista.onclick = (e) => {
      const elemento = e.target;
      if (elemento.classList.contains('list-group-item')) {
        const infoPokemon = callbackAPI(elemento.dataset.nombre)
          .then((info) => {
            callbackMostrarInfo(info);
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
  