import axios from "axios";
import { toast } from "sonner";

const token =
  typeof window !== "undefined" && window.localStorage.getItem("la-api-token");

export const loadAllProducts = async (
  setIsLoading: (value: boolean) => void
) => {
  setIsLoading(true);
  const config = {
    headers: { Authorization: `Bearer ${token}` },
  };

  try {
    const response = await axios.patch(
      `${process.env.NEXT_PUBLIC_API_URL}/api/v1/load/products`,
      config
    );

    toast.success(response?.data?.message);
    return response;
  } catch (err: any) {
    toast.error(err.response.data.message);
  } finally {
    setIsLoading(false);
  }
};
