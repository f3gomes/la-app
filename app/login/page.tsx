"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const Login = () => {
  const [error, setError] = useState("");
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const onSubmit = async (event: any) => {
    event.preventDefault();

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/user/signin`,
        data
      );
      localStorage.setItem("la-api-token", response.data.token);
      router.push("/");
    } catch (err) {
      setError("Falha no login. Por favor, verifique suas credenciais.");
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
        className="flex flex-col gap-2 justify-center items-center h-screen"
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

          <Button type="submit">Entrar</Button>
        </div>

        <div className="flex gap-2 text-sm">
          <span className="text-slate-600">Não tem uma conta?</span>
          <Link href={"/register"}>Registre-se</Link>
        </div>

        {error && <div className="text-rose-600">{error}</div>}
      </form>
    </div>
  );
};

export default Login;
