import { ResponseBody, TSegmentType } from "@/lib/types/";
import axios from "axios";

const api = axios.create({
  baseURL: "https://preonboarding.platdev.net/api/cars"
});

export const getCars = async ({
  queryKey
}: {
  queryKey: [string, TSegmentType];
}) => {
  if (queryKey[1] === "ALL") {
    return (await api.get<ResponseBody>("")).data.payload;
  }
  return (
    await api.get<ResponseBody>("", {
      params: {
        segment: queryKey[1]
      }
    })
  ).data.payload;
};
