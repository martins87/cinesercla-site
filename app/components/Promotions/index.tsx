import SectionHeader from "../SectionHeader/SectionHeader";
import CenteredEl from "../ui/CenteredElement";

import Promotion0 from "../../assets/images/promotions/promotion-0.png";
import Promotion1 from "../../assets/images/promotions/promotion-1.png";
import Promotion2 from "../../assets/images/promotions/promotion-2.png";
import Promotion3 from "../../assets/images/promotions/promotion-3.png";
import Promotion4 from "../../assets/images/promotions/promotion-4.png";
import Promotion5 from "../../assets/images/promotions/promotion-5.png";
import PromotionCard from "./PromotionCard";

const imgData = [
  Promotion0,
  Promotion1,
  Promotion2,
  Promotion3,
  Promotion4,
  Promotion5,
];

const Promotions = () => {
  return (
    <CenteredEl className="my-10" direction="col">
      <SectionHeader title="Promoções" />
      <CenteredEl className="grid grid-cols-2 gap-x-2">
        {imgData.slice(0, 2).map((img, index) => (
          <PromotionCard key={index} img={img} />
        ))}
      </CenteredEl>
    </CenteredEl>
  );
};

export default Promotions;
