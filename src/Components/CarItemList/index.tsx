import { CarsData } from "@/lib/types";
import { CardItemListWrapper } from "./styles";
import CarItem from "../CarItem";

interface Props {
  isLoading: boolean;
  carItemData?: CarsData[];
}

const CarItemList = ({ carItemData, isLoading }: Props) => {
  if (isLoading) {
    return (
      <CardItemListWrapper>
        <p className="message">불러오는 중</p>
      </CardItemListWrapper>
    );
  }
  if (!carItemData || carItemData.length === 0) {
    return (
      <CardItemListWrapper>
        <p className="message">차량이 없습니다.</p>
      </CardItemListWrapper>
    );
  }
  return (
    <CardItemListWrapper>
      {carItemData.map((carData) => (
        <CarItem key={carData.id} carData={carData} />
      ))}
    </CardItemListWrapper>
  );
};

export default CarItemList;
