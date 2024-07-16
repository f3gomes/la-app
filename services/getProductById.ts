import { Product } from "@/types";
import axios from "axios";
import { toast } from "sonner";

const token =
  typeof window !== "undefined" && window.localStorage.getItem("la-api-token");

export const getProductById = async (
  id: string,
  setIsLoading: (value: boolean) => void,
  setProductData: (value: any) => void
) => {
  setIsLoading(true);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${id}`,
      config
    );
    const product = (await response.data.product[0]) as Product;
    setProductData(product);
  } catch (err: any) {
    toast.error(err.response.data.message);
  } finally {
    setIsLoading(false);
  }
};
