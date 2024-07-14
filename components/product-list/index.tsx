"use client";

import React, { useEffect, useState } from "react";

import { Product } from "@/types";
import { getProducts } from "@/actions/getProducts";
import ProductCard from "../product-card";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    getProducts(setIsLoading, setProducts, setError);
  }, []);

  return (
    <section className="grid gap-4 m-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
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
  );
}
