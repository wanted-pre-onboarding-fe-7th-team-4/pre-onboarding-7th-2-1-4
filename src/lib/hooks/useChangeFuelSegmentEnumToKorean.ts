import { useState } from "react";
import {
  FUELTYPE,
  SEGMENT,
  TFuelType,
  TFuelTypeValue,
  TSegment,
  TSegmentValue
} from "../types/types";

const useChangeFuelSegmentEnumToKorean = () => {
  const [fuel, setFuel] = useState<TFuelTypeValue>("전기");
  const [segment, setSegment] = useState<TSegmentValue>("전체");

  const changeFuelToKorean = (fuelTypeKey: TFuelType) => {
    setFuel(FUELTYPE[fuelTypeKey]);
  };

  const changeSegmentToKorean = (segmentType: TSegment) => {
    setSegment(SEGMENT[segmentType]);
  };
  return { fuel, segment, changeFuelToKorean, changeSegmentToKorean };
};

export default useChangeFuelSegmentEnumToKorean;
