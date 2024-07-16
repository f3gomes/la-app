import EditProduct from "@/components/product-edit";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const EditProductPage = ({ params: { id } }: ProductPageProps) => {
  return (
    <div>
      <EditProduct id={id} />
    </div>
  );
};

export default EditProductPage;
