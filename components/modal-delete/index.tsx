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
import { deleteProductById } from "@/services/deleteProductById";
import { Trash2Icon } from "lucide-react";
import { useState } from "react";
import { EditProductProps } from "../product-edit";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

export function ModalDelete({ id }: EditProductProps) {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");

  const router = useRouter();

  const handleDelete = async () => {
    try {
      setIsLoading(true);
      await deleteProductById(id, setIsLoading, setError);
      toast("Successfully deleted product");
      router.push("/");
    } catch (err: any) {
      toast(err.response.data.message);
    } finally {
      setIsLoading(false);
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
            <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
            <AlertDialogDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
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
