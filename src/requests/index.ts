import { BASE_URL, GET_POKEMON_ERROR, REQUEST_LIMIT } from '@/const';
import { ApiResponse, PokeMon } from '@/types';

export const getPokemons = async (limit: number): Promise<ApiResponse> => {
  const pokemons = await fetch(`${BASE_URL}/api/v2/pokemon?offset=${limit*REQUEST_LIMIT}&limit=${REQUEST_LIMIT}`);
  try {
    return await pokemons.json();
  } catch (e) {
    throw new Error(GET_POKEMON_ERROR)
  }
}

export const getPokemon = async (url: string): Promise<PokeMon | Error> => {
  const pokemon = await fetch(url);

  try {
    return await pokemon.json();
  } catch (e) {
    throw new Error(GET_POKEMON_ERROR)
  }
}