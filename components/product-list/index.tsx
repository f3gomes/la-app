"use client";

import React, { useEffect, useState } from "react";
import { Product } from "@/types";
import { getProducts } from "@/services/getProducts";
import { Spinner } from "../spinner";
import ProductCard from "../product-card";

export default function ProductsList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    getProducts(setIsLoading, setProducts);
  }, []);

  if (products.length === 0 && !isLoading) {
    return (
      <section className="flex gap-4 m-4 flex-wrap justify-center">
        <h1>No products</h1>
      </section>
    );
  }

  return (
    <>
      <section className="flex gap-4 m-4 flex-wrap justify-center">
        {isLoading ? (
          <div>
            <Spinner />{" "}
          </div>
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
