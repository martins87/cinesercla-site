"use client";

import { useEffect, useState } from "react";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { useMovieStore } from "./store/movie";
import { useBannerStore } from "./store/banner";
import Container from "./components/ui/Container";
import Hero from "./components/Hero";
import Movies from "./components/Movies";
import Newsletter from "./components/Newsletter";
import Promotions from "./components/Promotions";
import Services from "./components/Services";

export default function Home() {
  const { fetchBannerList } = useBannerStore();
  const { fetchMovieList } = useMovieStore();
  const [loading, setLoading] = useState<boolean>(true);

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

  useEffect(() => {
    const fetchBanners = async () => {
      try {
        await fetchBannerList();
      } catch (error) {
        console.error("Failed to fetch banners", error);
      } finally {
        setLoading(false);
      }
    };

    fetchBanners();
  }, [fetchBannerList]);

  return (
    <main>
      <Hero loading={loading} />
      <Container className="-mt-10">
        <Movies loading={loading} />
        <Newsletter />
        <Services />
        <Promotions />
      </Container>
    </main>
  );
}
