"use client";

import { useState } from "react";

import axios from "axios";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { Navbar } from "@/components/navbar";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";

const NewProduct = () => {
  const initialState = {
    name: "",
    brand: "",
    urlImage: "",
    price: 0,
    stock: 0,
  };

  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState(initialState);

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
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/api/v1/products`,
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

  return (
    <>
      <Navbar />
      <div className="h-screen -mt-16">
        <form
          onSubmit={onSubmit}
          className="flex flex-col gap-3 justify-center items-center h-screen"
        >
          <h1 className="text-2xl font-bold">Novo Produto</h1>

          <div className="flex flex-col gap-2 w-60">
            <Input
              type="text"
              name="name"
              placeholder="Nome"
              value={data.name || ""}
              onChange={(e) => handleChange(e)}
            />

            <Input
              type="text"
              name="brand"
              placeholder="Marca"
              value={data.brand || ""}
              onChange={(e) => handleChange(e)}
            />

            <Input
              type="text"
              name="urlImage"
              placeholder="Imagem(URL)"
              value={data.urlImage || ""}
              onChange={(e) => handleChange(e)}
            />

            <Input
              type="number"
              name="price"
              placeholder="Preço R$ (12.99)"
              value={data.price || 0}
              onChange={(e) => handleChange(e)}
            />

            <Input
              type="number"
              name="stock"
              placeholder="Estoque"
              value={data.stock || 0}
              onChange={(e) => handleChange(e)}
            />

            <Button type="submit" disabled={isLoading}>
              {isLoading ? <Spinner /> : <span>Salvar</span>}
            </Button>
          </div>
        </form>
      </div>
    </>
  );
};

export default NewProduct;
