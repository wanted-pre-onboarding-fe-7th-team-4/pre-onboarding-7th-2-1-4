export const FUELTYPE = {
  gasoline: "가솔린",
  ev: "전기",
  hybrid: "하이브리드"
} as const;

type FuelTypeObject = typeof FUELTYPE;
export type TFuelType = keyof FuelTypeObject;
export type TFuelTypeValue = FuelTypeObject[TFuelType];

export const SEGMENT = {
  ALL: "전체",
  C: "소형",
  D: "중형",
  E: "대형",
  SUV: "SUV"
} as const;

type SegmentObject = typeof SEGMENT;
export type TSegment = keyof SegmentObject;
export type TSegmentValue = SegmentObject[TSegment];

export type TSegmentRequest = "SUV" | "C" | "D" | "E" | "";

export type TSegmentType = "SUV" | "C" | "D" | "E" | "ALL";
