import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";
import Link from "next/link";

export const UserMenu = () => {
  return (
    <Menubar>
      <MenubarMenu>
        <MenubarTrigger className="cursor-pointer">UserName</MenubarTrigger>
        <MenubarContent>
          <Link href={"/new-product"}>
            <MenubarItem>Adicionar novo produto</MenubarItem>
          </Link>
          <MenubarItem>Carregar produtos de teste</MenubarItem>
          <MenubarItem>Eliminar todos os produtos</MenubarItem>
          <MenubarItem>Logs</MenubarItem>
        </MenubarContent>
      </MenubarMenu>
    </Menubar>
  );
};
