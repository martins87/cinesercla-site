import { Dispatch, FC, SetStateAction } from "react";

import Typography from "../Typography";
import Centered from "../ui/CenteredElement";
import { FAQCategory, Topic } from "@/app/types/FAQ";

type FAQBoxProps = {
  topic: Topic;
  setCategory: Dispatch<SetStateAction<FAQCategory | null>>;
};

const FAQBox: FC<FAQBoxProps> = ({ topic, setCategory }) => {
  return (
    <Centered
      className="h-[72px] bg-[#7F7F7F] hover:cursor-pointer hover:bg-[#980038] transition-all ease-in-out duration-300 rounded-2xl"
      onClick={() => setCategory(topic.category as FAQCategory)}
    >
      <Typography className="text-2xl leading-none text-center" weight="700">
        {topic.label}
      </Typography>
    </Centered>
  );
};

export default FAQBox;
