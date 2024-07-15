"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { toast } from "sonner";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (data.email && data.password !== "") {
      if (data.password === data.confirmPassword) {
        setIsLoading(true);
        try {
          const response = await axios.post(
            `${process.env.NEXT_PUBLIC_API_URL}/user/signup`,
            data
          );
          router.push("/login");
        } catch (err: any) {
          toast(err.response.data.message);
          console.log(err);
        } finally {
          setIsLoading(false);
        }
      } else {
        toast("Password does not match");
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
    <div>
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-3 justify-center items-center h-screen"
      >
        <h1 className="text-2xl font-bold">LA System</h1>

        <div className="flex flex-col gap-2 w-60">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            onChange={(e) => handleChange(e)}
          />

          <Input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={(e) => handleChange(e)}
          />

          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirmar Senha"
            onChange={(e) => handleChange(e)}
          />

          <Button type="submit">
            {isLoading ? <Spinner /> : <span>Registrar</span>}
          </Button>
        </div>

        <div className="flex gap-2 text-sm">
          <span className="text-slate-600">Já possui uma conta?</span>
          <Link
            href={"/login"}
            className="hover:font-medium transition duration-200"
          >
            Entrar
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
