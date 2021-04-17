export const saludo = 'hola!';

export function reiniciarListado() {
    const $listado = document.querySelector('#listado');
    $listado.innerHTML = '';
}

export async function dibujarListado(nuevaLista) {

    reiniciarListado();

    const $listado = document.querySelector('#listado');
    
    const resultado = nuevaLista.results;

    resultado.forEach((pokemon, index) => {
        

        const nuevoItemLista = document.createElement('div');
        nuevoItemLista.classList.add('item-lista');
        nuevoItemLista.classList.add('col-xl-3');
        nuevoItemLista.classList.add('col-xs-2');
        nuevoItemLista.classList.add('col-lg-4');
        nuevoItemLista.classList.add('col-md-6');

        nuevoItemLista.dataset.url = pokemon.url;
        nuevoItemLista.dataset.nombre = pokemon.name;
        
        const nuevoNombrePoke = document.createElement('div');
        nuevoNombrePoke.classList.add('item-lista');
        nuevoNombrePoke.textContent = pokemon.name;
        nuevoNombrePoke.dataset.url = pokemon.url;
        nuevoNombrePoke.dataset.nombre = pokemon.name;


        const nuevaImagen = document.createElement('img');
        nuevaImagen.classList.add('imagen-poke');
        nuevaImagen.classList.add('item-lista');
        nuevaImagen.dataset.url = pokemon.url;
        nuevaImagen.dataset.nombre = pokemon.name;

        const infoPoke = buscarEnAPI(pokemon.name);

        
            

        infoPoke.then((info) => { // me hubiese gustado asignar esto a un await, con la finalidad de mandar esa respuesta a otra funcion por ej manejarImagenes(respuesta); y delegar correctamente la funcionalidad de las distintas funciones (valga la redundancia), ya que ahora dibujarListado no solo dibuja el listado, ahora tambien esta llamando a la api =s
            const urlImagen = info.sprites.front_default;
            
            nuevaImagen.src = urlImagen
        })
        nuevoItemLista.appendChild(nuevoNombrePoke);
        nuevoItemLista.appendChild(nuevaImagen);
        $listado.appendChild(nuevoItemLista);
    })
}