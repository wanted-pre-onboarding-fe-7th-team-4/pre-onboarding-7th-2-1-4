import Category from "@/Components/Category";
import { TSegment } from "@/lib/types";
import CarItemList from "@/Components/CarItemList";
import { useCarList } from "@/lib/hooks";
import { GetServerSideProps } from "next";
import { dehydrate, QueryClient } from "@tanstack/react-query";
import { getCars } from "@/lib/api";
export const categoryData: TSegment[] = ["ALL", "E", "D", "C", "SUV"];

const Index = () => {
  const { isLoading, cars, currentCategory, setCurrentCategory } = useCarList();

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

export default Index;

export const getServerSideProps: GetServerSideProps = async () => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(["cars", "ALL"], getCars);
  return {
    props: {
      dehydratedState: dehydrate(queryClient)
    }
  };
};
