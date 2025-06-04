"use client";

import { useMovieStore } from "@/app/store/movie";
import Container from "@/app/components/ui/Container";
import { useEffect, useState } from "react";
import MovieCardsSkeleton from "@/app/components/Movies/MovieCardsSkeleton";
import Typography from "@/app/components/Typography";
import MovieCard from "@/app/components/Movies/MovieCard";
import CenteredElement from "@/app/components/ui/CenteredElement";

const EmBrevePage = () => {
  const { fetchMovieList, movieList } = useMovieStore();
  const [loading, setLoading] = useState<boolean>(true);

  console.log("movie list", movieList);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        await fetchMovieList();
      } catch (error) {
        console.error("Failed to fetch movies", error);
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, [fetchMovieList]);

  return (
    <Container className="mt-32 items-start gap-y-4">
      <Typography className="text-2xl" weight="700">
        Filmes Em Breve
      </Typography>
      {loading || !movieList ? (
        <MovieCardsSkeleton />
      ) : (
        <CenteredElement className="grid grid-cols-1 md:grid-cols-3 tablet:grid-cols-4 gap-2">
          {movieList
            .filter((movie) => {
              return movie.situacao === "em-breve";
            })
            .map((movie) => (
              <div key={movie.idFilme} className="mobile:px-1">
                <MovieCard movie={movie} />
              </div>
            ))}
        </CenteredElement>
      )}
    </Container>
  );
};

export default EmBrevePage;
