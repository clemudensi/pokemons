import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
  useQuery,
  useQueryClient,
  UseQueryResult
} from '@tanstack/react-query';
import { getPokemon, getPokemons } from '@/requests';
import { ApiResponse, PokeMon } from '@/types';
import pokemonList from '../../__fixtures__/pokemons.json';

export const useGetPokemons = (): UseInfiniteQueryResult<ApiResponse, Error> => {
  const queryClient = useQueryClient()
  const initialData = () => queryClient.getQueryState(['pokemons'])?.data;

  return useInfiniteQuery(['pokemons'], async ({pageParam = 0}) => {
    return await getPokemons(pageParam)
  }, {
    initialData: () => {
      const data = initialData();
      return {
        pageParams: [undefined],
        pages: data ? [data] : [pokemonList]
      }
    },
    // @ts-ignore
    getNextPageParam: lastPage => lastPage?.next ? lastPage?.next : undefined,
    keepPreviousData: false
  });
};

export const useGetPokemon = (url: string): UseQueryResult<PokeMon> => {
  return useQuery(['pokemon'], async () => await getPokemon(url));
}