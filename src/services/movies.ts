import { tmdbFetch } from './tmdb';

export type Movie = {
  id: number;
  title: string;
  poster_path: string;
  overview: string;
  release_date: string;
  vote_average: number;
};

export type MovieResponse = {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
};

export function getPopularMovies(page = 1): Promise<MovieResponse> {
  return tmdbFetch<MovieResponse>('/movie/popular', 'GET', { page });
}

export function searchMovies(query: string, page = 1): Promise<MovieResponse> {
  return tmdbFetch<MovieResponse>('/search/movie', 'GET', {
    query,
    page,
  });
}
