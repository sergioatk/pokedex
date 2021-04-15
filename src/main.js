let pagActual = 00;


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
            
            
            const nuevoCuadro = document.createElement('div');
            nuevoCuadro.classList.add('col-xl-3');
            nuevoCuadro.classList.add('col-xs-2');
            nuevoCuadro.classList.add('col-lg-4');
            nuevoCuadro.classList.add('col-md-6');
            nuevoCuadro.classList.add('poke-listado');
            nuevoCuadro.textContent = pokemon.name;

            const nuevaImagen = document.createElement('img');
            buscarEnAPI(pokemon.name).then(resultado => {
                //console.log(resultado.sprites.front_default);
                nuevaImagen.src = resultado.sprites.front_default
                
            })


            




            $listado.appendChild(nuevoCuadro);
            $listado.appendChild(nuevaImagen);

        })
    })
}

document.querySelector('.nav').onclick = function(e) {
    
    if (e.target.textContent.toLowerCase() === 'siguiente') {
        manejarNav(true);
    } else if (e.target.textContent.toLowerCase() === 'atras') {
        manejarNav(false);
}
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


armarListado(pagActual);
