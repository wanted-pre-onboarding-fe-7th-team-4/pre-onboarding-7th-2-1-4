import React, { useEffect } from "react";
import { Container } from "./styles";
import ItemTag from "../ItemTag";
import { Link } from "react-router-dom";
import { CarsData } from "../../lib/types/interface";
import {
  useChangeFuelSegmentEnumToKorean,
  useCalculateDate,
  useChangeAmountToLocalString
} from "@/lib/hooks";

interface Props {
  carData: CarsData;
}

const CarItem = ({ carData }: Props) => {
  const { day, calculateDate } = useCalculateDate();
  const { amountLocalString, changeLocalString } =
    useChangeAmountToLocalString();
  const { fuel, segment, changeFuelToKorean, changeSegmentToKorean } =
    useChangeFuelSegmentEnumToKorean();
  useEffect(() => {
    if (carData) {
      calculateDate(carData.createdAt);
      changeLocalString(carData.amount);
      changeFuelToKorean(carData.attribute.fuelType);
      changeSegmentToKorean(carData.attribute.segment);
    }
  }, [carData]);

  return (
    <Container>
      <Link to={`/detail/${carData.id}`}>
        <div className="textWrapper">
          <p className="brand">{carData.attribute.brand}</p>
          <p className="name">{carData.attribute.name}</p>
          <p className="type">
            {segment} / {fuel}
          </p>
          <p className="amount">월 {amountLocalString} 원 부터</p>
        </div>
        <div>
          <img
            src={carData.attribute.imageUrl}
            alt={carData.attribute.name}
            width={152}
            height={80}
          />
        </div>
        {day < 1 && <ItemTag className="newItemTag" />}
      </Link>
    </Container>
  );
};

export default CarItem;
