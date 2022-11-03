import { TFuelTypeValue, TSegmentValue, TFuelType, TSegment } from "./types";

export interface CarsData {
  id: number;
  startDate: string;
  createdAt: string;
  attribute: {
    brand: string;
    name: string;
    segment: TSegment;
    fuelType: TFuelType;
    imageUrl: string;
  };
  amount: number;
  insurance: {
    name: string;
    description: string;
  }[];
  additionalProducts: {
    name: string;
    amount: number;
  }[];
}

export interface NewCarsData {
  id: number;
  imageUrl: string;
  name: string;
  brand: string;
  segmentKorean: TSegmentValue;
  fuelKorean: TFuelTypeValue;
  insurance: { name: string; description: string }[];
  amount: string;
  carInfoList: { name: string; description: string }[];
  additionalProducts: { name: string; amount: string }[];
}
