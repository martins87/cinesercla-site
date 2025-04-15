"use client";

import { useEffect } from "react";

import { useMovieStore } from "./store/movie";
import { useMovies } from "./hooks/useMovies";
import Container from "./components/ui/Container";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Newsletter from "./components/Newsletter";
import Promotions from "./components/Promotions";
import Services from "./components/Services";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const { data: movies, isLoading } = useMovies();
  const { setMovieList } = useMovieStore();

  useEffect(() => {
    if (movies) setMovieList(movies);
  }, [movies, setMovieList]);

  return (
    <main>
      <Hero />
      <Container className="-mt-10">
        {isLoading ? null : <Movies />}
        <Newsletter />
        <Services />
        <Promotions />
      </Container>
    </main>
  );
}
