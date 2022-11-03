import Category from "@/Components/Category";
import { TSegment } from "@/lib/types";
import { useState } from "react";
import CarItemList from "@/Components/CarItemList";
import { useCarList } from "@/lib/hooks";
import { MetaTag } from "@/lib/seo/MetaTag";
const categoryData: TSegment[] = ["ALL", "E", "D", "C", "SUV"];

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState<TSegment>(
    categoryData[0]
  );
  const { isLoading, cars } = useCarList(currentCategory);

  return (
    <>
      <MetaTag
        title={"BC2"}
        description={"차량 대여 서비스"}
        imgsrc={
          "https://grepp-programmers.s3.amazonaws.com/production/company/logo/7347/%EC%95%8C%ED%8B%B0%EB%AA%A8%EB%B9%8C%EB%A6%AC%ED%8B%B0-%EB%A1%9C%EA%B3%A0-%ED%9D%91%EB%B0%B1.jpg"
        }
      />
      <Category
        categoryData={categoryData}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <CarItemList isLoading={isLoading} carItemData={cars} />
    </>
  );
};

export default Home;
