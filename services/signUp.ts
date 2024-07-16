import axios from "axios";
import { toast } from "sonner";

export const signUp = async (
  data: any,
  setIsLoading: (value: boolean) => void
) => {
  setIsLoading(true);
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_URL}/user/signup`,
      data
    );

    toast(response.data.message);
    return response;
  } catch (err: any) {
    toast(err.response.data.message);
    console.log(err);
  } finally {
    setIsLoading(false);
  }
};
