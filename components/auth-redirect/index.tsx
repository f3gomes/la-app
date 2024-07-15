import { redirect } from "next/navigation";
import { useEffect } from "react";

export const AuthRedirect = () => {
  const token =
    typeof window !== "undefined" &&
    window.localStorage.getItem("la-api-token");

  useEffect(() => {
    if (!token) {
      redirect("/");
    }
  }, []);

  return <></>;
};
