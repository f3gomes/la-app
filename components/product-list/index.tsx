"use client";

import React, { useEffect, useState } from "react";

import { Product } from "@/types";

import ProductCard from "../product-card";
import { AuthRedirect } from "../auth-redirect";
import { getProducts } from "@/services/getProducts";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts(setIsLoading, setProducts, setError);
  }, []);

  return (
    <>
      <AuthRedirect />

      <section className="flex gap-4 m-4 flex-wrap justify-center">
        {isLoading ? (
          <div>Carregando...</div>
        ) : (
          <>
            {products?.map((item) => (
              <ProductCard {...item} key={item.id} />
            ))}
          </>
        )}
      </section>
    </>
  );
}
