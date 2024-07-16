import axios from "axios";
import { toast } from "sonner";
import { Product } from "@/types";

const token =
  typeof window !== "undefined" && window.localStorage.getItem("la-api-token");

export const getProducts = async (
  setIsLoading: (value: boolean) => void,
  setProducts: (value: any) => void
) => {
  setIsLoading(true);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products`,
      config
    );
    const list = (await response.data) as Product[];
    setProducts(list);
  } catch (err: any) {
    toast.error(err.response.data.message);
  } finally {
    setIsLoading(false);
  }
};
