import { FC } from 'react';
import * as Styled from '@components';
import { PokeMon } from '@types';

interface IPokemonCard {
  pokemon: PokeMon
}

export const PokemonCard: FC<IPokemonCard> = ({ pokemon}) => {
  return (
    <Styled.CardGroup>
      <Styled.PokemonImage pokemon={{image: pokemon.sprites.other['official-artwork'].front_default, name: pokemon.name}} />
      <Styled.CardGroupTitle>
        <Styled.Title datd-testid="movies">
          <Styled.ParagraphLargeTypography datd-testid="movies">
            Name: {pokemon.name}
          </Styled.ParagraphLargeTypography>
        </Styled.Title>
        <Styled.ParagraphLargeTypography>
          Experience Level: {pokemon.base_experience}
        </Styled.ParagraphLargeTypography>
      </Styled.CardGroupTitle>
    </Styled.CardGroup>
  )
}