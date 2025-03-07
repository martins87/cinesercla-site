import Image from "next/image";

import GradientOverlay from "@/app/components/GradientOverlay";
import Container from "@/app/components/ui/Container";
import MovieInfo from "@/app/components/Movie/MovieInfo";
import MovieSession from "@/app/components/Movie/MovieSession";
import MovieTrailers from "@/app/components/Movie/MovieTrailers";
import { movie } from "@/app/constants/movies";

// @ts-expect-error:next-line
const MoviePage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  return (
    <>
      <div className="relative h-screen">
        <Image
          className="w-screen h-screen object-cover tablet:object-fill"
          src={movie.cover!}
          alt="Image"
        />
        <GradientOverlay hero />
      </div>
      <Container className="mt-10 gap-y-10">
        <MovieInfo movie={movie} />
        <MovieSession movie={movie} />
        <MovieTrailers movie={movie} />
      </Container>
    </>
  );
};

export default MoviePage;
