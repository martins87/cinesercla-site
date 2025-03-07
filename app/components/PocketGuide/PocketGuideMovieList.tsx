import CenteredElement from "../ui/CenteredElement";
import PocketGuideMovieDetail from "./PocketGuideMovieDetail";

const PocketGuideMovieList = () => {
  return (
    <CenteredElement className="gap-y-2 overflow-y-scroll" direction="col">
      <PocketGuideMovieDetail />
      <PocketGuideMovieDetail />
      <PocketGuideMovieDetail />
      <PocketGuideMovieDetail />
      <PocketGuideMovieDetail />
      <PocketGuideMovieDetail />
      <PocketGuideMovieDetail />
      <PocketGuideMovieDetail />
      <PocketGuideMovieDetail />
      <PocketGuideMovieDetail />
    </CenteredElement>
  );
};

export default PocketGuideMovieList;
