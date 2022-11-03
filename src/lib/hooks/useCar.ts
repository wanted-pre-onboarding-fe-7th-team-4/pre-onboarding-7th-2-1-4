import { getCars } from "@/lib/api";
import { CarsData, TSegmentType } from "@/lib/types/";
import { useQuery } from "@tanstack/react-query";

const useCar = (id?: number) => {
  const { isLoading, isError, data, error } = useQuery<
    CarsData[],
    Error,
    CarsData[],
    [string, TSegmentType]
  >(["cars", "ALL"], getCars);

  const car = data?.find((data: CarsData) => data.id === id);

  return { isLoading, isError, car, error };
};

export default useCar;
