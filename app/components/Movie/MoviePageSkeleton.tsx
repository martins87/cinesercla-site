import Container from "@/app/components/ui/Container";
import GradientOverlay from "@/app/components/GradientOverlay";
import SkeletonElement from "../SkeletonElement";

const MoviePageSkeleton = () => {
  return (
    <div className="relative h-screen">
      <div className="absolute top-0 left-0 w-screen h-screen bg-[#D8D8D8] dark:bg-[#49575A]">
        <Container className="">
          <SkeletonElement className="rounded-full w-[54px] h-[54px]" />
        </Container>
      </div>
      <GradientOverlay hero />
    </div>
  );
};

export default MoviePageSkeleton;
