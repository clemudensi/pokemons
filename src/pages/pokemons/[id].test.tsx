import {
  render,
  Matcher,
  MatcherOptions,
  waitFor,
} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pokemon from '@/pages/pokemons/[id]';
import * as hooks from '@/hooks/useGetPokemons';
import mockedPokemon from '../../../__fixtures__/pokemon.json';

const mockedUseGetPokemon = jest.spyOn(hooks, 'useGetPokemon') as jest.Mock<unknown>;

jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: '/pokemons/1',
      pathname: '/pokemons/1',
      query: {
        id: 1
      },
      asPath: '/pokemons/1',
    };
  },
}));

const queryClient = new QueryClient();

let getByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement,
  queryAllByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement[];

describe('<Pokemon />',  () => {
  beforeEach(() => {
    mockedUseGetPokemon.mockImplementation(() => ({data: mockedPokemon}));

    const component = render(
      <QueryClientProvider client={queryClient}>
        <Pokemon />
      </QueryClientProvider>
    );

    getByTestId = component.getByTestId;
    queryAllByTestId = component.queryAllByTestId;
  });

  describe('Pokemon Detail Page', () => {
    it('should render details page correctly', async () => {
      await waitFor(() => {
        expect(getByTestId('pokemonTitle')).toHaveTextContent(`Pokemon ${mockedPokemon.name}`);
        expect(getByTestId('pokemonName')).toHaveTextContent(`Name: ${mockedPokemon.name}`);
        expect(getByTestId('pokemonExperience')).toHaveTextContent(`Experience Level: ${mockedPokemon.base_experience}`);
      });
    });
  });
});