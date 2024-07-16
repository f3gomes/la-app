"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";
import { deleteAllProducts } from "@/services/deleteAllProducts";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";
import { Button } from "../ui/button";

export function ModalDeleteAll() {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleDeleteAll = async () => {
    const resp = await deleteAllProducts(setIsLoading);

    if (resp) {
      router.push("/");
    }
  };

  return (
    <div className="flex justify-center mt-12">
      <AlertDialog>
        <Button className="w-40">
          <AlertDialogTrigger className="absolute">
            Remove All products
          </AlertDialogTrigger>
        </Button>

        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete all your products from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDeleteAll}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
