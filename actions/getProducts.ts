import { Product } from "@/types";
import axios from "axios";

const token = localStorage.getItem("la-api-token");

export const getProducts = async (
  setIsLoading: (value: boolean) => void,
  setProducts: (value: any) => void,
  setError: (value: string) => void
) => {
  setIsLoading(true);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_URL}`,
      config
    );
    const list = (await response.data) as Product[];
    setProducts(list);
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
