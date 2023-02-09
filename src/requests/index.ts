import { BASE_URL, GET_POKEMON_ERROR, REQUEST_LIMIT } from '@const';
import { ApiResponse, PokeMon } from '@types';

export const getPokemons = async (): Promise<ApiResponse | Error> => {
  const pokemons = await fetch(`${BASE_URL}/api/v2/pokemon?offset=0&limit=${REQUEST_LIMIT}`);

  if (!pokemons.ok) {
    return new Error(GET_POKEMON_ERROR);
  }

  const { results, next } = await pokemons.json();
  return { results, next };
}

export const getPokemon = async (url: string): Promise<PokeMon | Error> => {
  const pokemon = await fetch(url);

  if (!pokemon.ok){
    return new Error(GET_POKEMON_ERROR);
  }

  return await pokemon.json();
}