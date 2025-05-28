"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";

import { TMDBMovie } from "@/app/types/Movie";
import { useMovieStore } from "@/app/store/movie";
import Typography from "@/app/components/Typography";
import MoviePageClient from "@/app/components/Movie/MoviePage";

const MoviePage = () => {
  const params = useParams();
  const { getMovieById, fetchMovieList } = useMovieStore();
  const [movie, setMovie] = useState<TMDBMovie | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = params as { id: string };

  useEffect(() => {
    const loadMovie = async () => {
      try {
        await fetchMovieList();
        const foundMovie = getMovieById(id);
        console.log("found movie", foundMovie);
        setMovie(foundMovie);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [fetchMovieList, getMovieById, id]);

  if (loading) return <Typography>Carregando filme...</Typography>;

  if (!movie) notFound();

  return <MoviePageClient movie={movie} />;
};

export default MoviePage;
