import {
  render,
  fireEvent,
  screen,
  Matcher,
  MatcherOptions,
  waitFor,
} from '@testing-library/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { Pokemons } from '@/module/Pokemons';
import * as hooks from '@/hooks/useGetPokemons';
import { ApiResponse } from '@/types';
import mockedPokemons from '../../__fixtures__/pokemons.json';
import {
  mockAllIsIntersecting,
  mockIsIntersecting,
  intersectionMockInstance,
} from 'react-intersection-observer/test-utils';
import { useRouter } from "next/router";

const mockedUseGetPokemons = jest.spyOn(hooks, 'useGetPokemons') as jest.Mock<unknown>;

jest.mock("next/router", () => ({
  useRouter: jest.fn(),
}));

const queryClient = new QueryClient();

const pokemonResult: ApiResponse = mockedPokemons;

let getByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement,
  queryAllByTestId: (id: Matcher, options?: MatcherOptions | undefined) => HTMLElement[];

describe('<Pokemons />', () => {
  beforeEach( () => {
    mockAllIsIntersecting(true);
    mockedUseGetPokemons.mockImplementation(() => ({data: {pages: [mockedPokemons]}}));

    const component = render(
      <QueryClientProvider client={queryClient}>
        <Pokemons />
      </QueryClientProvider>
    );

    getByTestId = component.getByTestId;
    queryAllByTestId = component.queryAllByTestId;
  });

  afterEach(() => {
    mockedUseGetPokemons.mockClear();
  });

  describe('Pokemon List', () => {
    it('should render pokemons correctly', async () => {
      expect(screen.getByText(/Pokemons/i)).toBeInTheDocument();
      await waitFor(() => {
        expect(queryAllByTestId('pokemonList')).toHaveLength(pokemonResult.results.length - 1);
        expect(queryAllByTestId('pokemonListRef')).toHaveLength( 1);
      });
    });

    it('should mark as favorite', () => {
      expect(queryAllByTestId('isNotFavorite')).toHaveLength(pokemonResult.results.length);
      expect(queryAllByTestId('isFavorite')).toHaveLength(0);

      fireEvent.click(queryAllByTestId('isNotFavorite')[0]);

      expect(queryAllByTestId('isNotFavorite')).toHaveLength(pokemonResult.results.length - 1);
      expect(queryAllByTestId('isFavorite')).toHaveLength(1);
    });


    it('should mock intersecting on specific hook', () => {
      const wrapper = screen.getByTestId('pokemonListRef');

      mockIsIntersecting(wrapper, 0.5);
      screen.getByText(pokemonResult.results[pokemonResult.results.length - 1].name);
    });

    it('should create a hook and call observe', () => {
      const wrapper = getByTestId('pokemonListRef');
      const instance = intersectionMockInstance(wrapper);

      expect(instance.observe).toHaveBeenCalledWith(wrapper);
    });
  });
});
