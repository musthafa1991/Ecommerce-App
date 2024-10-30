import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { useEffect, useState } from "react";

function OrderManagement() {
  const orderList = [
    {
      _id: "672203b1a73613a5c38b3699",
      user: {
        _id: "67205a8b52313164001b18d2",
        name: "musthafa",
        email: "musthafa@example.com",
      },
      items: [
        {
          product: "671e53a367b832d275190ea1",
          quantity: 2,
          price: 99.99,
        },
        {
          product: "671f337a5ca077e3905622d5",
          quantity: 1,
          price: 99.99,
        },
      ],
      totalAmount: 119.97,
      status: "Pending",
      createdAt: "2024-10-30T10:00:17.228Z",
    },
    // Additional orders can be added here
  ];
  const [openDetailsDialog, setOpenDetailsDialog] = useState(false);

  function handleFetchOrderDetails(orderId) {}

  return (
    <Card>
      <CardHeader>
        <CardTitle>All Orders</CardTitle>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Order ID</TableHead>
              <TableHead>Order Date</TableHead>
              <TableHead>Order Status</TableHead>
              <TableHead>Order Price</TableHead>
              <TableHead>
                <span className="sr-only">Details</span>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orderList && orderList.length > 0 ? (
              orderList.map((orderItem) => (
                <TableRow key={orderItem._id}>
                  <TableCell>{orderItem._id}</TableCell>
                  <TableCell>
                    {new Date(orderItem.createdAt).toLocaleDateString()}
                  </TableCell>
                  <TableCell>
                    <Badge
                      className={`py-1 px-3 ${
                        orderItem.status === "confirmed"
                          ? "bg-green-500"
                          : orderItem.status === "rejected"
                          ? "bg-red-600"
                          : "bg-black"
                      }`}
                    >
                      {orderItem.status}
                    </Badge>
                  </TableCell>
                  <TableCell>${orderItem.totalAmount.toFixed(2)}</TableCell>
                  <TableCell>
                    <Button
                      variant="outline"
                      onClick={() => handleFetchOrderDetails(orderItem._id)}
                    >
                      View Details
                    </Button>
                    <Dialog
                      open={openDetailsDialog}
                      onOpenChange={() => {
                        setOpenDetailsDialog(false);
                      }}
                    >
                      <DialogContent>
                        <DialogHeader>
                          <DialogTitle>Order Details</DialogTitle>
                        </DialogHeader>
                      </DialogContent>
                    </Dialog>
                  </TableCell>
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell colSpan="5" className="text-center">
                  No orders available
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}

export default OrderManagement;
