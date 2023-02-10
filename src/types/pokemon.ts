interface APIResponseBase {
  name: string;
  url: string;
}

interface ApiResponse {
  count?: number;
  next?: string | null;
  previous?: string | null;
  readonly results?: APIResponseBase[];
}

interface PokeMon {
  abilities: {
    ability: APIResponseBase;
  }[];
  base_experience: number;
  form: APIResponseBase[];
  height: number;
  id: number;
  moves: {
    move: APIResponseBase;
  }[];
  name: string;
  sprites: {
    back_default: string;
    front_default: string;
    other: {
      'official-artwork': {
        front_default: string;
        front_shiny: string;
      }
    }
  }
}

export type { APIResponseBase, ApiResponse, PokeMon }