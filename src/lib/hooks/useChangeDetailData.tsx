import { useEffect, useState } from "react";
import { CarsData, NewCarsData } from "../types";

import {
  useCalculateDate,
  useChangeAmountToLocalString,
  useChangeFuelSegmentEnumToKorean
} from "./";

const defaultValue: NewCarsData = {
  id: 0,
  imageUrl: "",
  name: "",
  brand: "",
  segmentKorean: "전체",
  fuelKorean: "전기",
  insurance: [{ name: "", description: "" }],
  amount: "",
  carInfoList: [{ name: "", description: "" }],
  additionalProducts: [{ name: "", amount: "" }]
};

const useChangeDetailData = (data?: CarsData) => {
  const [detail, setDetail] = useState<NewCarsData>(defaultValue);
  const { amountLocalString, changeLocalString } =
    useChangeAmountToLocalString();
  const { changeLocalString: changeAdditionalAmout } =
    useChangeAmountToLocalString();
  const {
    fuel: fuelKorean,
    segment: segmentKorean,
    changeFuelToKorean,
    changeSegmentToKorean
  } = useChangeFuelSegmentEnumToKorean();
  const { month, week, date, calculateDate } = useCalculateDate();

  useEffect(() => {
    if (data) {
      const {
        id,
        startDate,
        attribute: { imageUrl, name, brand, fuelType, segment },
        insurance,
        additionalProducts,
        amount
      } = data;

      changeFuelToKorean(fuelType);
      changeSegmentToKorean(segment);
      calculateDate(startDate);
      changeLocalString(amount, "ko-KR");

      const carInfoList = [
        { name: "차종", description: segmentKorean },
        { name: "연료", description: fuelKorean },
        {
          name: "이용 가능일",
          description: `${month}월 ${date}일 (${week}) 부터`
        }
      ];

      const newAdditionalProducts = additionalProducts.map((value) => ({
        name: value.name,
        amount: `월 ${changeAdditionalAmout(value.amount, "ko-KR")} 원`
      }));

      setDetail({
        id,
        imageUrl,
        name,
        brand,
        segmentKorean,
        fuelKorean,
        insurance,
        amount: amountLocalString,
        carInfoList,
        additionalProducts: newAdditionalProducts
      });
    }
  }, [data, month, week, date]);

  return detail;
};

export default useChangeDetailData;
