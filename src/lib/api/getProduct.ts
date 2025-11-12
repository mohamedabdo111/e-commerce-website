import { BASE_URL } from "./baseUrl";
import { Product, CategoryWithProducts } from "@/types/api.types";

export interface ProductResponse {
  status: string;
  data: Product;
}

export async function getProductData(productID: string): Promise<Product> {
  const response = await BASE_URL.get(`/api/products/${productID}`);
  console.log(response.data, "response.data");
  return response.data.data;
}

export async function getProductByCategoryID(
  categoryID: string
): Promise<CategoryWithProducts> {
  const response = await BASE_URL.get(`/api/categories/${categoryID}`);
  console.log(response.data, "response.data");
  return response.data.data;
}
