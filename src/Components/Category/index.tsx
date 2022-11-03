import Tag from "../Tag";
import React from "react";
import { CategoryWrapper } from "./styes";
import { TSegment } from "@/lib/types";

interface Props {
  categoryData: TSegment[];
  currentCategory: TSegment;
  setCurrentCategory: React.Dispatch<React.SetStateAction<TSegment>>;
}

// changeFuelToKorean
// -fuel enum을 받아 문자열로 변경해줍니다.
// changeSegmentToKorean
// - segment enum을 받아 문자열로 변경해줍니다.
// return
// - fuel 문자열
// - segment 문자열
// - changeFuelToKorean(fuelTypeKey: TFuelType)=>void
// - changeSegmentToKorean(segmentType: TSegment)=>void

const Category = ({
  categoryData,
  currentCategory,
  setCurrentCategory
}: Props) => {
  return (
    <CategoryWrapper>
      {categoryData.map((segment, index) => (
        <Tag
          index={index}
          key={`tag${index}`}
          selected={segment === currentCategory}
          onClick={() => setCurrentCategory(segment)}
          tagName={segment}
        />
      ))}
    </CategoryWrapper>
  );
};

export default Category;
