"use client";

import React from "react";
import { Product } from "@/types";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export default function ProductCard({
  id,
  name,
  brand,
  urlImage,
  price,
  stock,
}: Product) {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-center min-h-[4rem]">
          {name}
        </CardTitle>
        <CardDescription className="relative w-full h-60">
          <Image
            src={urlImage}
            fill
            sizes="100%"
            alt={name}
            className="object-contain"
          />
        </CardDescription>
      </CardHeader>
      <CardContent className="flex items-center justify-center">
        <p className="min-h-[6rem]">{brand}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <p>Preço</p>
          <p>{price}</p>
        </div>

        <Button size={"lg"} variant={"default"}>
          Comprar
        </Button>
      </CardFooter>
    </Card>
  );
}
