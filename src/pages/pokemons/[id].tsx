import { useRouter } from 'next/router';
import * as Styled from '@/components';
import { useGetPokemon } from '@/hooks';
import { BASE_URL } from '@/const';
import { splitString } from '@/utils';

export async function getServerSideProps() {
  return {
    props: {},
  };
}

const Pokemon = () => {
  const router = useRouter()

  const { id } = router.query;
  const path = router.asPath;

  const pokemonId = splitString(path, '/pokemons/')[1] || id;

  const result = router?.query && useGetPokemon(`${BASE_URL}/api/v2/pokemon/${pokemonId}`);

  return (
    <>
      {result?.data &&
        <Styled.PokemonCardDetails>
            <Styled.BackButton />
            <Styled.H2Typography data-testid="pokemonTitle">Pokemon {result.data?.name}</Styled.H2Typography>
            <Styled.PokemonCard pokemon={result.data} />
        </Styled.PokemonCardDetails>
      }
    </>
  )
}

export default Pokemon
