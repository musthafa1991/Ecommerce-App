import React from "react";
import { ShoppingCartIcon } from "@heroicons/react/24/outline";

const MetricSummary = ({ totalSales, totalOrders }) => {
  return (
    <div className="flex flex-col p-4 bg-white shadow rounded-lg">
      <div className="flex items-center mt-4">
        <ShoppingCartIcon className="w-6 h-6 text-blue-500" />
        <div className="ml-2">
          <p className="text-gray-600">Total Sales</p>
          <p className="text-xl font-bold">${totalSales}</p>
        </div>
      </div>
      <div className="flex items-center mt-4">
        <ShoppingCartIcon className="w-6 h-6 text-green-500" />
        <div className="ml-2">
          <p className="text-gray-600">Total Orders</p>
          <p className="text-xl font-bold">{totalOrders}</p>
        </div>
      </div>
    </div>
  );
};

export default MetricSummary;
