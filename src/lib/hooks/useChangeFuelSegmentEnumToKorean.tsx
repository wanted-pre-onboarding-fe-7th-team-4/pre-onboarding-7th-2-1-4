import { useState } from "react";
import { FUELTYPE, SEGMENT, TFuelType, TSegment } from "../types/types";

const useChangeFuelSegmentEnumToKorean = () => {
  const [fuel, setFuel] = useState("");
  const [segment, setSegment] = useState("");

  const changeFuelToKorean = (fuelTypeKey: TFuelType) => {
    setFuel(FUELTYPE[fuelTypeKey]);
  };

  const changeSegmentToKorean = (segmentType: TSegment) => {
    setSegment(SEGMENT[segmentType]);
  };

  return { fuel, segment, changeFuelToKorean, changeSegmentToKorean };
};

export default useChangeFuelSegmentEnumToKorean;
