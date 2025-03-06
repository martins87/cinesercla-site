import Image from "next/image";

import GradientOverlay from "@/app/components/GradientOverlay";
import Container from "@/app/components/ui/Container";
import wolverine_cover from "@/app/assets/images/movies/covers/wolverine.png";
import MovieInfo from "@/app/components/Movie/MovieInfo";
import MovieSession from "@/app/components/Movie/MovieSession";
import MovieTrailers from "@/app/components/Movie/MovieTrailers";

// @ts-expect-error:next-line
const MoviePage = async ({ params }) => {
  const { id } = await params;
  console.log(id);

  return (
    <>
      <div className="relative h-screen">
        <Image
          className="w-screen h-screen object-cover tablet:object-fill"
          src={wolverine_cover}
          alt="Image"
        />
        <GradientOverlay hero />
      </div>
      <Container className="mt-10">
        <MovieInfo />
        <MovieSession />
        <MovieTrailers />
      </Container>
    </>
  );
};

export default MoviePage;
