let pagActual = 00;
armarListado(pagActual);

document.querySelector('.nav').onclick = function(e) {
    
    if (e.target.textContent.toLowerCase() === 'siguiente') {
        manejarNav(true);
    } else if (e.target.textContent.toLowerCase() === 'atras') {
        manejarNav(false);
}
}


document.querySelector('#listado').onclick = function(e) {
    if (e.target.classList.contains('poke-listado')) {
        mostrarInfo(e.target);
    }
}



function buscarEnAPI(offset = 00) {
    
    

    


    if (typeof offset === 'number') {

        const LLAMADA_API = "https://pokeapi.co/api/v2/pokemon/?offset=" + offset + "&limit=20";

        return fetch(LLAMADA_API)
        .then(respuesta => respuesta.json())
    }
        
    if (typeof offset === 'string') {
        

        const LLAMADA_API = 'https://pokeapi.co/api/v2/pokemon/' + offset;

        return fetch(LLAMADA_API)
        .then(respuesta => respuesta.json())
    }
        
}

function armarListado(offset) {
    const $listado = document.querySelector('#listado');
    $listado.innerHTML = '';
    
    
    const pedidoListado = buscarEnAPI(offset);

    pedidoListado.then(respuesta => {
        
        const listado = respuesta.results;

        

        listado.forEach(function(pokemon) {
            
            const nuevoItem = document.createElement('div');

            const nuevoCuadro = document.createElement('div');
            nuevoCuadro.id = pokemon.name;
            
            nuevoItem.classList.add('col-xl-3');
            nuevoItem.classList.add('col-xs-2');
            nuevoItem.classList.add('col-lg-4');
            nuevoItem.classList.add('col-md-6');
            nuevoItem.classList.add('poke-listado');
            nuevoItem.id = pokemon.name;
            //console.log(nuevoItem.id)
            nuevoCuadro.textContent = pokemon.name;
            nuevoCuadro.classList.add('poke-listado');

            const nuevaImagen = document.createElement('img');
            buscarEnAPI(pokemon.name).then(resultado => {
                //console.log(resultado.abilities[0].ability.name);
                nuevaImagen.src = resultado.sprites.front_default
                nuevaImagen.classList.add('poke-listado');
                nuevaImagen.id = pokemon.name;
                //console.log(nuevaImagen.id)
                
            })


            




            nuevoItem.appendChild(nuevoCuadro);
            nuevoItem.appendChild(nuevaImagen);

            $listado.appendChild(nuevoItem);

        })
    })
}




function mostrarInfo(pokemon) {
    const $nombre = document.querySelector('#nombre');
    const $altura = document.querySelector('#altura');
    const $peso = document.querySelector('#peso');
    const $habilidad = document.querySelector('#habilidad');


    buscarEnAPI(pokemon.id).then(respuesta => {
        

        $nombre.textContent = respuesta.name;
        $altura.textContent = respuesta.height;
        $peso.textContent = respuesta.weight;
        $habilidad.textContent = '';

        respuesta.abilities.forEach(function(habilidad) {
            
            if (!$habilidad.textContent) {
                $habilidad.textContent = habilidad.ability.name;
                
            } else {
                $habilidad.textContent += `, ${habilidad.ability.name}`;
                
            }
            
        })

        
    })
}




function manejarNav(direccion) {
    
        if (direccion === true) {
            pagActual += 20;
            console.log(`nueva pagina actual es ${pagActual}`);
            armarListado(pagActual);
        }

        if (direccion === false) {
            if (pagActual === 0) {
                return
            }
            console.log(`nueva pagina actual es ${pagActual}`);
            pagActual -= 20;
            armarListado(pagActual);
            
           
        }
    
}


