import Category from "@/Components/Category";
import { TSegment } from "@/lib/types";
import { useState } from "react";
import CarItemList from "@/Components/CarItemList";
import { useCarList } from "@/lib/hooks";
const categoryData: TSegment[] = ["ALL", "E", "D", "C", "SUV"];

const Home = () => {
  const [currentCategory, setCurrentCategory] = useState<TSegment>(
    categoryData[0]
  );
  const { isLoading, cars } = useCarList(currentCategory);

  return (
    <>
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
