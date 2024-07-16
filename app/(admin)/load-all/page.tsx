"use client";

import { Navbar } from "@/components/navbar";
import { Spinner } from "@/components/spinner";
import { Button } from "@/components/ui/button";
import { loadAllProducts } from "@/services/loadAllProducts";
import { useRouter } from "next/navigation";
import { useState } from "react";

const DeleteAllProductsPage = () => {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleDeleteAll = async () => {
    const resp = await loadAllProducts(setIsLoading);

    if (resp) {
      router.push("/home");
    }
  };

  return (
    <>
      <Navbar />
      <div className="flex justify-center mt-12">
        <Button className="w-40" onClick={handleDeleteAll} disabled={isLoading}>
          {isLoading ? <Spinner /> : <span>Load test products</span>}
        </Button>
      </div>
    </>
  );
};

export default DeleteAllProductsPage;
