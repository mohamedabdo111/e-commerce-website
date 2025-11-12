export interface SliderData {
  _id: string;
  alt: string;
  image: string;
  link: string;
  createdAt: string;
  updatedAt: string;
  active: boolean;
  order: number;
}

export interface Category {
  _id: string;
  name: string;
  description?: string;
}

export interface SubCategory {
  _id: string;
  name: string;
}

export interface Product {
  _id: string;
  name: string;
  description: string;
  image?: string;
  price?: number;
  retailPrice?: number;
  originalPrice?: number;
  originalRetailPrice?: number;
  stock: number;
  hasActiveOffer: boolean;
  activeOfferId: string | null;
  category: Category;
  subCategory: SubCategory;
  createdAt: string;
  updatedAt: string;
  link?: string;
  active?: boolean;
}

export interface Offer {
  _id: string;
  title: string;
  description: string;
  image: string;
  link: string;
  products: Product[];
  createdAt: string;
  updatedAt: string;
  active: boolean;
}

export interface CategoryProduct {
  _id: string;
  name: string;
  description: string;
  image?: string;
  price?: number;
  retailPrice?: number;
  originalPrice?: number;
  originalRetailPrice?: number;
  stock: number;
  hasActiveOffer: boolean;
  activeOfferId: string | null;
  category: string;
  subCategory: string;
  createdAt: string;
  updatedAt: string;
}

export interface CategorySubCategory {
  _id: string;
  name: string;
  description?: string;
  image?: string;
  category: string;
  products: string[];
  createdAt: string;
  updatedAt: string;
}

export interface CategoryWithProducts {
  _id: string;
  name: string;
  description?: string;
  products: CategoryProduct[];
  subCategories: CategorySubCategory[];
  createdAt: string;
  updatedAt: string;
}
