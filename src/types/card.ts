interface CardProps {
  pokemon: {
    id: number
    poster_path: string;
    title: string;
    backdrop_path: string;
    release_date: string;
  }
}

export type { CardProps };