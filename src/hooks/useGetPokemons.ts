import { useInfiniteQuery, UseInfiniteQueryResult, useQueryClient } from '@tanstack/react-query';
import { getPokemons } from '@requests';
import { ApiResponse } from '@types';
import pokemonList from '../../__fixtures__/pokemon.json';

export const useGetPokemons = (): UseInfiniteQueryResult<ApiResponse, Error> => {
  const queryClient = useQueryClient()
  const initialData = () => queryClient.getQueryState(['pokemons'])?.data

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
    getNextPageParam: (lastPage) => {
      return lastPage?.next ? lastPage?.next : undefined
    },
    keepPreviousData: false
  });
}