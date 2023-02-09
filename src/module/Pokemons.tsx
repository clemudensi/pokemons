import { useCallback, useMemo, useEffect, useState } from 'react';
import Link from 'next/link';
import { useInView, InViewHookResponse } from 'react-intersection-observer';
import * as Styled from '@components';
import { useGetPokemons } from '@hooks';
import { CenterItems } from '@components';

export const Pokemons = () => {
  const [page, setPage] = useState<number>(1);
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
    data?.pages.map(p => p.results).flat(), [data?.pages]
  );

  return (
    <>
      <Styled.H2Typography>Pokemons</Styled.H2Typography>
      <Styled.ContainerFlex>
        <Styled.List>
          {
            pokemonList && pokemonList.map((pokemon, index) =>
              <Styled.ListItem key={index} ref={index === pokemonList?.length - 1 ? ref : null}>
                <Link href={`/pokemons/${7}`}>
                  {pokemon?.name}
                </Link>
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