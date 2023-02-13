import {
  render,
  Matcher,
  MatcherOptions,
  waitFor, fireEvent,
} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import Pokemon from '@/pages/pokemons/[id]';
import * as hooks from '@/hooks/useGetPokemons';
import mockedPokemon from '../../../__fixtures__/pokemon.json';
import { useRouter } from "next/router";
import * as nextRouter from 'next/router';

const mockedUseGetPokemon = jest.spyOn(hooks, 'useGetPokemon') as jest.Mock<unknown>;
const mockedUseRouter = jest.spyOn(nextRouter, 'useRouter') as jest.Mock<unknown>;

const queryClient = new QueryClient();
let back = jest.fn();

let getByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement,
  queryAllByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement[];

describe('<Pokemon />',  () => {
  beforeEach(() => {
    mockedUseGetPokemon.mockImplementation(() => ({data: mockedPokemon}));
    mockedUseRouter.mockImplementation(() => ({
      route: '/pokemons/1',
      pathname: '/pokemons/1',
      query: {
        id: 1
      },
      asPath: '/pokemons/1',
      back
    }))

    const component = render(
      <QueryClientProvider client={queryClient}>
        <Pokemon />
      </QueryClientProvider>
    );

    getByTestId = component.getByTestId;
    queryAllByTestId = component.queryAllByTestId;
  });

  afterEach(() => {
    mockedUseRouter.mockClear();
  });

  describe('Pokemon Detail Page', () => {
    it('should render details page correctly', async () => {
      await waitFor(() => {
        expect(getByTestId('pokemonTitle')).toHaveTextContent(`Pokemon ${mockedPokemon.name}`);
        expect(getByTestId('pokemonName')).toHaveTextContent(`Name: ${mockedPokemon.name}`);
        expect(getByTestId('pokemonExperience')).toHaveTextContent(`Experience Level: ${mockedPokemon.base_experience}`);
      });
    });

    it('should go back to previous page', () => {
      fireEvent.click(getByTestId('backButton'));
      expect(back).toBeCalledTimes(1);
    });
  });
});
