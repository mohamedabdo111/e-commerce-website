import { BASE_URL } from "./baseUrl";
import { Product } from "@/types/api.types";

export interface ProductsResponse {
  status: string;
  results: number;
  pagination: {
    page: number;
    limit: number;
    total: number;
  };
  data: Product[];
}

export async function getProductsData({
  page = 1,
  limit = 10,
}: {
  page?: number;
  limit?: number;
}): Promise<Product[]> {
  const response = await BASE_URL.get<ProductsResponse>(
    `/api/products?page=${page}&limit=${limit}`
  );
  return response.data.data;
}

