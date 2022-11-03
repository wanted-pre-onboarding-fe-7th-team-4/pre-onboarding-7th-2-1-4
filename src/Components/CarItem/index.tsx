"use client";
import React, { useEffect } from "react";
import { Container } from "./styles";
import ItemTag from "../ItemTag";
import Link from "next/link";
import { CarsData } from "../../lib/types/interface";
import {
  useChangeFuelSegmentEnumToKorean,
  useCalculateDate,
  useChangeAmountToLocalString
} from "@/lib/hooks";
import Image from "next/image";

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
      <Link href={`/Detail/${carData.id}`}>
        <div className="textWrapper">
          <p className="brand">{carData.attribute.brand}</p>
          <p className="name">{carData.attribute.name}</p>
          <p className="type">
            {segment} / {fuel}
          </p>
          <p className="amount">월 {amountLocalString} 원 부터</p>
        </div>
        <div>
          <Image
            src={carData.attribute.imageUrl}
            alt={carData.attribute.name}
            width={152}
            height={80}
            priority
          />
        </div>
        {day < 1 && <ItemTag className="newItemTag" />}
      </Link>
    </Container>
  );
};

export default CarItem;
