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

  const handleLogout = () => {
    localStorage.removeItem("la-api-token");
    router.push("/login");
  };

  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">UserName</MenubarTrigger>
        <MenubarContent>
          <Link href={"/new-product"}>
            <MenubarItem>Add New Product</MenubarItem>
          </Link>
          <MenubarItem>Load test products</MenubarItem>
          <MenubarItem>Remove all products</MenubarItem>
          <MenubarItem>Logs</MenubarItem>
          <MenubarItem onClick={handleLogout}>Logout</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
