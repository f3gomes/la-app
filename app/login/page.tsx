"use client";

import React, { useState } from "react";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";

const Login = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const router = useRouter();

  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (data.email && data.password !== "") {
      try {
        setIsLoading(true);
        const response = await axios.post(
          `${process.env.NEXT_PUBLIC_API_URL}/user/signin`,
          data
        );
        localStorage.setItem("la-api-token", response.data.token);
        router.push("/");
      } catch (err: any) {
        toast(err.response.data.message);
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
            placeholder="Password"
            onChange={(e) => handleChange(e)}
          />

          <Button type="submit">
            {" "}
            {isLoading ? <Spinner /> : <span>LOGIN</span>}
          </Button>
        </div>

        <div className="flex gap-2 text-sm">
          {/* eslint-disable-next-line */}
          <span className="text-slate-600">Don't have an account?</span>
          <Link
            href={"/register"}
            className="hover:font-semibold transition duration-200"
          >
            Signup
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
