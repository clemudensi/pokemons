import { useInfiniteQuery, UseInfiniteQueryResult } from '@tanstack/react-query';
import { getPokemons } from '@requests';
import { ApiResponse } from '@types';

export const useGetPokemons = (): UseInfiniteQueryResult<ApiResponse> => {
  return useInfiniteQuery(['pokemons'], getPokemons, {
    getNextPageParam: lastPage => lastPage?.next,
  });
}