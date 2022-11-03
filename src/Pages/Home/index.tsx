import Category from "@/Components/Category";
import { TSegment } from "@/lib/types";
import { useState } from "react";
import { payload } from "@/lib/mock";
import CarItemList from "@/Components/CarItemList";
import { CarsData } from "@/lib/types";

const categoryData: TSegment[] = ["ALL", "E", "D", "C", "SUV"];

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState<TSegment>(
    categoryData[0]
  );
  return (
    <>
      <Category
        categoryData={categoryData}
        currentCategory={currentCategory}
        setCurrentCategory={setCurrentCategory}
      />
      <CarItemList isLoading={false} carItemData={payload as CarsData[]} />
    </>
  );
};

export default Home;
