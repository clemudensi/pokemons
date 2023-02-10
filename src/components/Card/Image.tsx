import * as Styled from '@/components';

type ImageProps = {
  pokemon: {
    name: string, image: string
  }
}

export const PokemonImage = ({ pokemon }: ImageProps) => {
  return (
    <Styled.CardImageContainer>
      <Styled.CardImage
        src={pokemon.image}
        alt={pokemon.name}
      />
    </Styled.CardImageContainer>
  )
}