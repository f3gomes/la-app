"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/spinner";
import { toast } from "sonner";
import { signUp } from "@/services/signUp";

const Register = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const router = useRouter();

  const handleChange = (event: any) => {
    setData({
      ...data,
      [event.target.name]: event.target.value,
    });
  };

  const onSubmit = async (event: any) => {
    event.preventDefault();

    if (data.email && data.password !== "") {
      if (data.password === data.confirmPassword) {
        const resp = await signUp(data, setIsLoading);

        if (resp) {
          router.push("/");
        }
      } else {
        toast("Password does not match");
      }
    } else {
      toast("Fill in all the fields");
    }
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

          <Input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            onChange={(e) => handleChange(e)}
          />

          <Button type="submit">
            {isLoading ? <Spinner /> : <span>REGISTER</span>}
          </Button>
        </div>

        <div className="flex gap-2 text-sm">
          <span className="text-slate-600">Already have an account?</span>
          <Link
            href={"/"}
            className="hover:font-medium transition duration-200"
          >
            Login
          </Link>
        </div>
      </form>
    </div>
  );
};

export default Register;
