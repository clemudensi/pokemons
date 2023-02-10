import { useCallback, useMemo, useEffect, useState } from 'react';
import Link from 'next/link';
import { useInView, InViewHookResponse } from 'react-intersection-observer';
import * as Styled from '@/components';
import { useGetPokemons } from '@/hooks';
import { splitString } from '@/utils';
import { APIResponseBase } from '@/types';

export const Pokemons = () => {
  const [page, setPage] = useState<number>(1);
  const [favourites, setFavourite] = useState<number[]>([]);

  const pokemons = useGetPokemons();

  const { ref, inView }: InViewHookResponse = useInView({
    threshold: 0,
  });

  const { isFetching, isFetchingNextPage, hasNextPage, isLoading, data, fetchNextPage } = pokemons;

  const fetchNextMovies = useCallback(() => {
    if (!isFetching && !isFetchingNextPage && hasNextPage) {
      void fetchNextPage({pageParam: page});
    }
  }, [hasNextPage, isFetching, isFetchingNextPage, data?.pages]);

  useEffect(() => {
    if (inView && data?.pages) {
      setPage(page => page + 1);
      fetchNextMovies();
    }
  }, [inView]);

  const pokemonList = useMemo(() =>
    data?.pages.map(p => p.results).flat() as APIResponseBase[], [data?.pages]
  ) ?? [];

  const addToFavourite = useCallback((index: number) => {
    setFavourite(prevValue => [...prevValue, index]);

    if (favourites.includes(index)) {
      setFavourite(prevState => prevState.filter(item => item !== index))
    }
  }, [favourites]);

  const isFavourite = useCallback((index: number) => favourites.includes(index), [favourites]);

  return (
    <>
      <Styled.H2Typography>Pokemons</Styled.H2Typography>
      <Styled.ContainerFlex>
        <Styled.List>
          {
            pokemonList && pokemonList.map((pokemon, index) =>
              <Styled.ListItem
                key={index}
                ref={index === pokemonList?.length - 1 ? ref : null}
                data-testid={index === pokemonList?.length - 1 ? "pokemonListRef" : "pokemonList"}
              >
                <Styled.ContainerFlex>
                  <Link
                    href={`/pokemons/${splitString(pokemon.url, '/pokemon/')[1]}`}
                    data-testid="pokemonLink"
                  >
                    {pokemon?.name}
                  </Link>
                  <Styled.SarIcon
                    height={16}
                    width={16}
                    onClick={() => addToFavourite(index)}
                    color={isFavourite(index) ? 'gold' : undefined}
                    data-testid={isFavourite(index) ? 'isFavorite' : 'isNotFavorite'}
                  />
                </Styled.ContainerFlex>
              </Styled.ListItem>
            )
          }
          {(isLoading || isFetching || isFetchingNextPage) &&
            <Styled.CenterItems>
              <Styled.Spinner />
            </Styled.CenterItems>
          }
        </Styled.List>
      </Styled.ContainerFlex>
    </>
  )
}