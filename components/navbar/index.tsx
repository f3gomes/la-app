import { UserMenu } from "../user-menu";

export function Navbar() {
  return (
    <header className="sticky top-0 z-10 shadow bg-slate-300 px-12">
      <div className="container ms-auto p-4 flex items-center justify-between">
        <span>LA Products</span>
        <div className="flex items-center justify-center space-x-4">
          <div className="rounded-full flex justify-center items-center w-8 h-8 bg-blue-400 cursor-pointer">
            <UserMenu />
          </div>
        </div>
      </div>
    </header>
  );
}
