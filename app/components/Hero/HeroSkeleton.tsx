import Container from "@/app/components/ui/Container";
import GradientOverlay from "@/app/components/GradientOverlay";
import SkeletonElement from "../SkeletonElement";
import CenteredElement from "../ui/CenteredElement";

const HeroSkeleton = () => {
  return (
    <div className="relative h-screen">
      <GradientOverlay hero />
      {/* <div className="absolute top-0 left-0 w-screen h-screen bg-[#D8D8D8] dark:bg-[#3B3B3B]"> */}
      <div className="absolute top-0 left-0 w-screen h-screen bg-[#D8D8D8] dark:bg-[#49575A]">
        <Container className="">
          <CenteredElement items="start" direction="col">
            <CenteredElement
              className="sm:w-1/2 gap-y-4"
              direction="col"
              items="start"
            >
              <SkeletonElement className="w-[498px] h-[50px]" />
              <CenteredElement className="gap-x-2" justify="start">
                <SkeletonElement className="w-[82px] h-[18px]" />
                <SkeletonElement className="w-[29px] h-[18px]" />
                <SkeletonElement className="w-[82px] h-[18px]" />
              </CenteredElement>
              <SkeletonElement className="w-[498px] h-[96px]" />
              <CenteredElement className="gap-x-2" justify="start">
                <SkeletonElement className="w-[189px] h-[67px]" />
                <SkeletonElement className="rounded-full w-[54px] h-[54px]" />
              </CenteredElement>
            </CenteredElement>
          </CenteredElement>
        </Container>
      </div>
    </div>
  );
};

export default HeroSkeleton;
