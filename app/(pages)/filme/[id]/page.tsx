"use client";

import { useEffect, useState } from "react";
import { notFound, useParams } from "next/navigation";

import { TMDBMovie } from "@/app/types/Movie";
import { useMovieStore } from "@/app/store/movie";
import MoviePageClient from "@/app/components/Movie/MoviePage";
import MoviePageSkeleton from "@/app/components/Movie/MoviePageSkeleton";

const MoviePage = () => {
  const params = useParams();
  const { getMovieById, getMovieByTMDBId, fetchMovieList } = useMovieStore();
  const [movie, setMovie] = useState<TMDBMovie | undefined>(undefined);
  const [loading, setLoading] = useState<boolean>(true);
  const { id } = params as { id: string };

  useEffect(() => {
    const loadMovie = async () => {
      try {
        await fetchMovieList();
        const foundMovie = getMovieById(id);
        if (!foundMovie) {
          const emBreveMovie = getMovieByTMDBId(+id);
          setMovie(emBreveMovie);
        } else {
          setMovie(foundMovie);
        }
        console.log("found movie", foundMovie);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    loadMovie();
  }, [fetchMovieList, getMovieById, getMovieByTMDBId, id]);

  if (loading) return <MoviePageSkeleton />;

  if (!movie) notFound();

  return <MoviePageClient movie={movie} />;
};

export default MoviePage;
