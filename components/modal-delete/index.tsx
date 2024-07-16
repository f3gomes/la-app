"use client";

import { useState } from "react";
import { Trash2Icon } from "lucide-react";
import { useRouter } from "next/navigation";
import { deleteProductById } from "@/services/deleteProductById";
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from "@/components/ui/alert-dialog";

import { EditProductProps } from "../product-edit";

export function ModalDelete({ id }: EditProductProps) {
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const handleDelete = async () => {
    const resp = await deleteProductById(id, setIsLoading);

    if (resp) {
      router.push("/home");
    }
  };

  return (
    <>
      <AlertDialog>
        <AlertDialogTrigger className="absolute right-0">
          <Trash2Icon className="text-red-800 cursor-pointer hover:text-red-600 transition duration-200" />
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Are you sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This will permanently delete your product from our servers.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction onClick={handleDelete}>
              Continue
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </>
  );
}
