"use client";
import { AxiosError } from "axios";
import { getCars } from "@/lib/api";
import { CarsData, TSegment, TSegmentType } from "@/lib/types/";
import { useQuery } from "@tanstack/react-query";
import { categoryData } from "@/pages/index";
import { useState } from "react";

const useCarList = () => {
  const [currentCategory, setCurrentCategory] = useState<TSegment>(
    categoryData[0]
  );

  const { isLoading, isError, data, error } = useQuery<
    CarsData[],
    AxiosError,
    CarsData[],
    [string, TSegmentType]
  >(["cars", currentCategory], getCars, { onError: (error) => error });

  return {
    isLoading,
    isError,
    cars: data,
    error,
    currentCategory,
    setCurrentCategory
  };
};

export default useCarList;
