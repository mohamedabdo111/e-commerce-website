import { BASE_URL } from "./baseUrl";

export async function getOffersData({
  page = 1,
  limit = 10,
}: {
  page: number;
  limit: number;
}) {
  const response = await BASE_URL.get(
    `/api/offers?page=${page}&limit=${limit}`
  );
  return response.data.data;
}

export async function getOfferById(offerID: string) {
  const response = await BASE_URL.get(`/api/offers/${offerID}`);
  return response.data.data;
}
