"use client";

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";
import { useRouter } from "next/navigation";

export const UserMenu = () => {
  const router = useRouter();

  const user =
    typeof window !== "undefined" && window.localStorage.getItem("la-api-user");

  const handleLogout = () => {
    router.push("/logout");
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">{user}</MenubarTrigger>
        <MenubarContent>
          <Link href={"/new-product"}>
            <MenubarItem>Add New Product</MenubarItem>
          </Link>
          <Link href={"/load-all"}>
            <MenubarItem>Load test products</MenubarItem>
          </Link>

          <Link href={"/delete-all"}>
            <MenubarItem>Remove all products</MenubarItem>
          </Link>
          <MenubarItem className="text-slate-400">Logs</MenubarItem>
          <MenubarItem onClick={handleLogout}>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
