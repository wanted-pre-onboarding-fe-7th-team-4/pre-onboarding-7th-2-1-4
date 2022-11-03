import { getCars } from "@/lib/api";
import { CarsData, TSegmentType } from "@/lib/types/";
import { useQuery } from "@tanstack/react-query";

const useCarList = (category: TSegmentType) => {
  const { isLoading, isError, data, error } = useQuery<
    CarsData[],
    Error,
    CarsData[],
    [string, TSegmentType]
  >(["cars", category], getCars);

  return { isLoading, isError, cars: data, error };
};

export default useCarList;
