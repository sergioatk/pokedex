import { Pokemon } from "./clases.js";

export async function pedirDatos(parametro = 0) {
    const BASE_URL = 'https://pokeapi.co/api/v2/pokemon/'
    if (typeof parametro === 'number') {
      const respuestaAPI = await fetch(`${BASE_URL}?offset=${parametro}&limit=20`);
      const respuestaJSON = respuestaAPI.json();
      
      return respuestaJSON;
    } else {
    const respuestaAPI = await fetch(`${BASE_URL}${parametro}`);
    const respuestaJSON = respuestaAPI.json(); 

    
    //console.log(respuestaJSON);
    //console.log(nuevoPokemon);

    return respuestaJSON;
    
    }
  }
  