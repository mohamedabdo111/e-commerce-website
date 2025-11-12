import { BASE_URL } from "./baseUrl";

export const getSliderData = async () => {
  const response = await BASE_URL.get("/api/sliders?page=1&limit=10");
  return response.data.data;
};
