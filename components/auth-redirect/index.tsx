import { redirect } from "next/navigation";

export const AuthRedirect = () => {
  const token =
    typeof window !== "undefined" &&
    window.localStorage.getItem("la-api-token");

  if (!token) {
    redirect("/login");
  }

  return <></>;
};
