export let numeroPagina = 1;
export async function popularLista(pedido, callbackAPI) {
    const $listaPokemon = document.querySelectorAll('.list-group-item');
    const nuevaLista = await callbackAPI(pedido);
    $listaPokemon.forEach((elemento, i) => {
      elemento.textContent = nuevaLista.results[i].name;
      elemento.dataset.nombre = nuevaLista.results[i].name;
    })
  }
  export function mostrarInformacionPokemon(pokemon) {
    const $nombre = document.querySelector('#nombre');
    const $altura = document.querySelector('#altura');
    const $peso = document.querySelector('#peso');
    const $habilidades = document.querySelector('#habilidades');
    $habilidades.textContent = '';
    const $imagen = document.querySelector('img');
    $imagen.src = pokemon.imagen;
    $nombre.textContent = pokemon.nombre;
    $altura.textContent = pokemon.altura;
    $peso.textContent = pokemon.peso;
    pokemon.habilidades.forEach(function(habilidades) {
      if (!$habilidades.textContent) {
        $habilidades.textContent = habilidades.ability.name;    
      } else {
        $habilidades.textContent += `, ${habilidades.ability.name}`;       
      }        
    })
  }

 export function mostrarNumeroPagina(pagina) {
    const $nroPag = document.querySelector('#numero-pagina');
    $nroPag.textContent = Number(pagina);
  }