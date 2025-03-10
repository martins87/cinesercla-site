import { priceDetailList } from "@/app/constants/price";
import CenteredElement from "../ui/CenteredElement";
import PriceDetail from "./PriceDetail";
import { PriceDetail as PriceDetailT } from "@/app/types/PriceDetail";

const PriceDetailList = () => {
  return (
    <CenteredElement className="max-h-[75vh] gap-y-2" direction="col">
      {priceDetailList.map((priceDetail: PriceDetailT, index: number) => (
        <PriceDetail
          key={index}
          title={priceDetail.title}
          description={priceDetail.description}
        />
      ))}
    </CenteredElement>
  );
};

export default PriceDetailList;
