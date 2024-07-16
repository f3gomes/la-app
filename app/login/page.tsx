"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { Spinner } from "@/components/spinner";
import { signIn } from "@/services/signIn";

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
      const resp = await signIn(data, setIsLoading);

      if (resp) {
        localStorage.setItem("la-api-user", data.email);
        router.push("/");
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
