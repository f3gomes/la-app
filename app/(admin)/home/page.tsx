import { authOptions } from "@/app/api/auth/[...nextauth]/auth-options";
import { Navbar } from "@/components/navbar/index";
import ProductsList from "@/components/product-list";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session: any = await getServerSession(authOptions);

  return (
    <>
      <Navbar />
      <ProductsList session={session} />
    </>
  );
}
