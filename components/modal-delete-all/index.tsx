"use client";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { deleteAllProducts } from "@/services/deleteAllProducts";
import { Button } from "../ui/button";

export function ModalDeleteAll() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleDeleteAll = async () => {
    try {
      setIsLoading(true);
      await deleteAllProducts(setIsLoading, setError);
      toast("Successfully deleted all products");
      router.push("/");
    } catch (err: any) {
      toast(err.response.data.message);
    } finally {
      setIsLoading(false);
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
