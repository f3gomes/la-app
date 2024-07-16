"use client";

import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { Button } from "../ui/button";

const ButtonLogout = () => {
  const router = useRouter();

  async function logout() {
    localStorage.removeItem("la-api-token");
    localStorage.removeItem("la-api-user");

    await signOut({
      redirect: false,
    });

    router.replace("/");
  }

  return (
    <div className="flex w-full justify-center mt-12">
      <Button onClick={logout}>Logout</Button>
    </div>
  );
};

export default ButtonLogout;
