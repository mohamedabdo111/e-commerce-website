import { getProductByCategoryID } from "@/lib/api/getProduct";
import { notFound } from "next/navigation";
import CategoryDetails from "@/components/features/categories/categoryDetails";

interface AllProductByCategoryIDProps {
  params: Promise<{
    categoryID: string;
  }>;
}

const AllProductByCategoryID = async ({
  params,
}: AllProductByCategoryIDProps) => {
  const { categoryID } = await params;
  let categoryData;
  try {
    categoryData = await getProductByCategoryID(categoryID);
  } catch {
    notFound();
  }

  return <CategoryDetails categoryData={categoryData} />;
};

export default AllProductByCategoryID;
