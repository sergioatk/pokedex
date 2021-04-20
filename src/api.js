export async function pedirDatos(parametro = 0) {
    if (typeof parametro === 'number') {
      const respuestaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/?offset=${parametro}&limit=20`);
      const respuestaJSON = respuestaAPI.json();
      return respuestaJSON;
    } else {
    const respuestaAPI = await fetch(`https://pokeapi.co/api/v2/pokemon/${parametro}`);
    const respuestaJSON = respuestaAPI.json(); 
    return respuestaJSON;
    }
  }
  