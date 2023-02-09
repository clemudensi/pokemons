import { useMemo } from 'react';
import Link from 'next/link'
import * as Styled from '@components';
import { useGetPokemons } from '@hooks';

export const Pokemons = () => {
  const pokemons = useGetPokemons();

  const { isFetching, isFetchingNextPage, hasNextPage, isLoading, data } = pokemons;

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
              <Styled.ListItem key={index}>
                <Link href={`/pokemons/${7}`}>
                  {pokemon?.name}
                </Link>
              </Styled.ListItem>
            )
          }
        </Styled.List>
      </Styled.ContainerFlex>
    </>
  )
}