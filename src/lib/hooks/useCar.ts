import { AxiosError } from "axios";
import { getCars } from "@/lib/api";
import { CarsData, TSegmentType } from "@/lib/types";
import { useQuery } from "@tanstack/react-query";

const useCar = (id: number) => {
  const { isLoading, isError, data, error } = useQuery<
    CarsData[],
    AxiosError,
    CarsData | undefined,
    [string, TSegmentType]
  >(["cars", "ALL"], getCars, {
    select: (list) => list.find((item) => item.id === id),
    onError: (error) => error
  });

  return { isLoading, isError, car: data, error };
};

export default useCar;
