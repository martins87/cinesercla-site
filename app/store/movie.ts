import { create } from "zustand";
import { TMDBMovie } from "../types/Movie";
import { getMovies } from "../services/movies";

type MovieStore = {
  movieList: TMDBMovie[];
  hasFetched: boolean;
  fetchMovieList: () => Promise<void>;
  getMovieById: (id: string) => TMDBMovie | undefined;
};

export const useMovieStore = create<MovieStore>((set, get) => ({
  movieList: [],
  hasFetched: false,
  fetchMovieList: async () => {
    if (get().hasFetched) return;

    const list = await getMovies();

    set({ movieList: list, hasFetched: true });
  },
  getMovieById: (id: string) =>
    get().movieList.find((movie) => movie.idFilme === id),
}));
