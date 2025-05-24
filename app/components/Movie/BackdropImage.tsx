import { FC } from "react";
import Image from "next/image";

type BackdropImageProps = {
  backdropPath: string;
};

const BackdropImage: FC<BackdropImageProps> = ({ backdropPath }) => {
  return (
    <>
      <Image
        className="object-cover tablet:object-fill transition-all duration-300 ease-in-out"
        src={`https://image.tmdb.org/t/p/original${backdropPath}`}
        fill
        alt="Image"
      />
    </>
  );
};

export default BackdropImage;
