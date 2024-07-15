import { Product } from "@/types";
import axios from "axios";

const token =
  typeof window !== "undefined" && window.localStorage.getItem("la-api-token");

export const getProductById = async (
  id: string,
  setIsLoading: (value: boolean) => void,
  setProductData: (value: any) => void,
  setError: (value: string) => void
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
  } catch (e: any) {
    if (e.name === "AbortError") {
      console.log("Aborted");
      return;
    }

    setError(e);
  } finally {
    setIsLoading(false);
  }
};
