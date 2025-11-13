import { BASE_URL } from "./baseUrl";
import { Category } from "@/types/api.types";

export interface CategoriesResponse {
  status: string;
  results?: number;
  data: Category[];
}

export async function getCategoriesData(): Promise<Category[]> {
  try {
    const response = await BASE_URL.get<CategoriesResponse>("/api/categories");
    return response.data.data;
  } catch (error) {
    console.error("Error fetching categories:", error);
    return [];
  }
}

