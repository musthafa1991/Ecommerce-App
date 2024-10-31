import React, { Fragment, useEffect, useState } from "react";
import ProductImageUpload from "@/components/admin-view/image-Upload";
import AdminProductTile from "@/components/admin-view/productManagement/AdminProductTile";
import CommonForm from "@/components/common/form";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { useToast } from "@/hooks/use-toast";
import { addProductFormElements } from "@/config";
import {
  fetchProducts,
  createProduct,
  updateProduct,
  deleteProduct,
} from "../../services/api";

const initialFormData = {
  image: null,
  name: "",
  description: "",
  category: "",
  brand: "",
  price: "",
  salePrice: "",
  totalStock: "",
  averageReview: 0,
};

function ProductManagement() {
  const [openCreateProductsDialog, setOpenCreateProductsDialog] =
    useState(false);
  const [formData, setFormData] = useState(initialFormData);
  const [imageFile, setImageFile] = useState(null);
  const [uploadedImageUrl, setUploadedImageUrl] = useState("");
  const [imageLoadingState, setImageLoadingState] = useState(false);
  const [currentEditedId, setCurrentEditedId] = useState(null);
  const [productList, setProductList] = useState([]);
  const { toast } = useToast();

  const loadProducts = async () => {
    try {
      const products = await fetchProducts();
      setProductList(products);
    } catch (error) {
      toast({ title: "Error loading products", status: "error" });
    }
  };

  useEffect(() => {
    loadProducts();
  }, []);

  async function onSubmit(event) {
    event.preventDefault();
    try {
      if (currentEditedId) {
        await updateProduct(currentEditedId, {
          ...formData,
          image: uploadedImageUrl,
        });
        toast({ title: "Product updated successfully", status: "success" });
      } else {
        await createProduct({ ...formData, image: uploadedImageUrl });
        toast({ title: "Product added successfully", status: "success" });
      }
      resetForm();
      loadProducts();
    } catch (error) {
      toast({ title: "Error saving product", status: "error" });
    }
  }

  function resetForm() {
    setFormData(initialFormData);
    setOpenCreateProductsDialog(false);
    setCurrentEditedId(null);
    setImageFile(null);
    setUploadedImageUrl("");
  }

  async function handleDelete(productId) {
    try {
      await deleteProduct(productId);
      toast({ title: "Product deleted successfully", status: "success" });
      loadProducts();
    } catch (error) {
      toast({ title: "Error deleting product", status: "error" });
    }
  }

  function isFormValid() {
    return Object.keys(formData)
      .filter((key) => key !== "averageReview")
      .every((key) => formData[key] !== "");
  }

  return (
    <Fragment>
      <div className="mb-5 w-full flex justify-end">
        <Button onClick={() => setOpenCreateProductsDialog(true)}>
          Add New Product
        </Button>
      </div>
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {productList.length > 0 &&
          productList.map((productItem) => (
            <AdminProductTile
              key={productItem._id}
              product={productItem}
              setFormData={setFormData}
              setOpenCreateProductsDialog={setOpenCreateProductsDialog}
              setCurrentEditedId={setCurrentEditedId}
              handleDelete={handleDelete}
            />
          ))}
      </div>
      <Sheet open={openCreateProductsDialog} onOpenChange={resetForm}>
        <SheetContent side="right" className="overflow-auto">
          <SheetHeader>
            <SheetTitle>
              {currentEditedId ? "Edit Product" : "Add New Product"}
            </SheetTitle>
          </SheetHeader>
          <ProductImageUpload
            imageFile={imageFile}
            setImageFile={setImageFile}
            uploadedImageUrl={uploadedImageUrl}
            setUploadedImageUrl={setUploadedImageUrl}
            setImageLoadingState={setImageLoadingState}
            imageLoadingState={imageLoadingState}
            isEditMode={currentEditedId !== null}
          />
          <div className="py-6">
            <CommonForm
              onSubmit={onSubmit}
              formData={formData}
              setFormData={setFormData}
              buttonText={currentEditedId ? "Edit" : "Add"}
              formControls={addProductFormElements}
              isBtnDisabled={!isFormValid()}
            />
          </div>
        </SheetContent>
      </Sheet>
    </Fragment>
  );
}

export default ProductManagement;
