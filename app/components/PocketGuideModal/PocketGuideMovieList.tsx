import CenteredElement from "../ui/CenteredElement";
import PocketGuideMovieDetail from "./PocketGuideMovieDetail";
import { pocketGuideMovieList } from "@/app/constants/pocketGuideMovieList";
import { PocketGuideMovieDetail as MovieDetail } from "@/app/types/PocketGuideMovieDetail";

const PocketGuideMovieList = () => {
  return (
    <CenteredElement
      className="max-h-[75vh] gap-y-2 overflow-y-scroll"
      direction="col"
    >
      <div className="mt-[440px] tablet:my-40" />
      {pocketGuideMovieList.map((movieDetail: MovieDetail, index: number) => (
        <PocketGuideMovieDetail key={index} movieDetail={movieDetail} />
      ))}
    </CenteredElement>
  );
};

export default PocketGuideMovieList;
