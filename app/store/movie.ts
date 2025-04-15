import { create } from "zustand";
import { TMDBMovie } from "../types/Movie";

type MovieStore = {
  movieList: TMDBMovie[];
  setMovieList: (movies: TMDBMovie[]) => void;
  getMovieById: (id: number) => TMDBMovie | undefined;
};

export const useMovieStore = create<MovieStore>((set, get) => ({
  movieList: [],
  setMovieList: (movies) => set({ movieList: movies }),
  getMovieById: (id: number) => {
    return get().movieList.find((movie) => movie.tmdbId === id);
  },
}));
