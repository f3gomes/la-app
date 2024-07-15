"use client";

import { useEffect, useState } from "react";

import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { inputClass, labelClass } from "@/app/new-product/page";
import { getProductById } from "@/services/getProductById";
import { Product } from "@/types";

interface EditProductProps {
  id: string;
}

const EditProduct = ({ id }: EditProductProps) => {
  const initialState = {
    name: "",
    brand: "",
    urlImage: "",
    price: 0,
    stock: 0,
  };

  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<any>({});
  const [error, setError] = useState("");

  const router = useRouter();

  const token =
    typeof window !== "undefined" &&
    window.localStorage.getItem("la-api-token");

  function checkValues(currentState: any, initialState: any) {
    return Object.keys(currentState).every(
      (chave) => currentState[chave] !== initialState[chave]
    );
  }

  const onSubmit = async (event: any) => {
    event.preventDefault();

    const config = {
      headers: { Authorization: `Bearer ${token}` },
    };

    if (checkValues(data, initialState)) {
      setIsLoading(true);
      try {
        const response = await axios.patch(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products/${id}`,
          data,
          config
        );

        toast(response.data.message);
        setData(initialState);
      } catch (err: any) {
        toast(err.response.data.message);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      toast("Fill in all the fields");
    }
  };

  const handleChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  useEffect(() => {
    getProductById(id, setIsLoading, setData, setError);
  }, []);

  if (isLoading) {
    <div>
      <Spinner />{" "}
    </div>;
  }

  return (
    <>
      <Navbar />
      <div className="h-screen -mt-16">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 justify-center items-center h-screen"
        >
          <h1 className="text-2xl font-bold">Edit Product</h1>

          <div className="flex flex-col gap-2 w-60">
            <div className="relative">
              <Input
                type="text"
                id="name"
                name="name"
                placeholder=""
                value={data?.name || ""}
                onChange={(e) => handleChange(e)}
                className={inputClass}
              />
              <Label htmlFor="name" className={labelClass}>
                Name
              </Label>
            </div>

            <div className="relative">
              <Input
                type="text"
                name="brand"
                placeholder=""
                value={data?.brand || ""}
                onChange={(e) => handleChange(e)}
                className={inputClass}
              />
              <Label htmlFor="brand" className={labelClass}>
                Brand
              </Label>
            </div>

            <div className="relative">
              <Input
                type="text"
                name="urlImage"
                placeholder=""
                value={data?.urlImage || ""}
                onChange={(e) => handleChange(e)}
                className={inputClass}
              />
              <Label htmlFor="urlImage" className={labelClass}>
                Image(URL)
              </Label>
            </div>

            <div className="relative">
              <Input
                type="number"
                name="price"
                placeholder=""
                value={data?.price || 0}
                onChange={(e) => handleChange(e)}
                className={inputClass}
              />
              <Label htmlFor="price" className={labelClass}>
                Price
              </Label>
            </div>

            <div className="relative">
              <Input
                type="number"
                name="stock"
                placeholder=""
                value={data?.stock || 0}
                onChange={(e) => handleChange(e)}
                className={inputClass}
              />
              <Label htmlFor="stock" className={labelClass}>
                Qty
              </Label>
            </div>

            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Spinner /> : <span>Save</span>}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default EditProduct;
