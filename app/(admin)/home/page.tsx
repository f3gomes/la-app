import { nextAuthOptions } from "@/app/api/auth/[...nextauth]/route";
import { Navbar } from "@/components/navbar/index";
import ProductsList from "@/components/product-list";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session: any = await getServerSession(nextAuthOptions);

  return (
    <>
      <Navbar />
      <ProductsList session={session} />
    </>
  );
}
