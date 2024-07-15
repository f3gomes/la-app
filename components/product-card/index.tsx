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
    <Card className="w-72">
      <CardHeader>
        <CardTitle className="flex items-center justify-center min-h-[4rem]">
          {name}
        </CardTitle>
        <CardDescription className="relative w-full h-40">
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
        <p className="min-h-[2rem]">{brand}</p>
      </CardContent>
      <CardFooter className="flex items-center justify-between">
        <div>
          <p>Price</p>
          <p>R$ {price}</p>
        </div>

        <Button size={"lg"} variant={"default"}>
          Edit
        </Button>
      </CardFooter>
    </Card>
  );
}
