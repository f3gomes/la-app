import Link from "next/link";
import { UserMenu } from "../user-menu";
import { HomeIcon } from "lucide-react";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 shadow bg-slate-300">
      <div className="container ms-auto p-4 flex items-center justify-between px-6">
        <Link
          href={"/"}
          className="flex gap-2 hover:text-slate-700 transition duration-200"
        >
          <HomeIcon />
          <span>LA Products</span>
        </Link>
        <UserMenu />
      </div>
    </header>
  );
}
