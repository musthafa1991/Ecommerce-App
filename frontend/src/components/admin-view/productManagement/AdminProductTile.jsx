import React from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter } from "@/components/ui/card";

function AdminProductTile({
  product,
  setFormData,
  setOpenCreateProductsDialog,
  setCurrentEditedId,
  handleDelete,
}) {
  return (
    <Card className="w-full max-w-sm mx-auto">
      <div className="relative">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-64 object-cover rounded-t-lg"
        />
      </div>
      <CardContent>
        <h2 className="text-xl font-bold mb-2">{product.name}</h2>
        <div className="flex justify-between items-center mb-2">
          <span
            className={`${
              product.salePrice ? "line-through" : ""
            } text-lg font-semibold text-primary`}
          >
            ${product.price}
          </span>
          {product.salePrice > 0 && (
            <span className="text-lg font-bold">${product.salePrice}</span>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex justify-between items-center">
        <Button
          onClick={() => {
            setOpenCreateProductsDialog(true);
            setCurrentEditedId(product._id);
            setFormData(product);
          }}
        >
          Edit
        </Button>
        <Button onClick={() => handleDelete(product._id)}>Delete</Button>
      </CardFooter>
    </Card>
  );
}

export default AdminProductTile;
