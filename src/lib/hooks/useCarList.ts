import { AxiosError } from "axios";
import { getCars } from "@/lib/api";
import { CarsData, TSegment } from "@/lib/types/";
import { useQuery } from "@tanstack/react-query";

const useCarList = (category: TSegment) => {
  const { isLoading, isError, data, error } = useQuery<
    CarsData[],
    AxiosError,
    CarsData[],
    [string, TSegment]
  >(["cars", category], getCars, { onError: (error) => error });

  return { isLoading, isError, cars: data, error };
};

export default useCarList;
