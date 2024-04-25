"use client";
import { useEffect } from "react";
import useProduct from "@/store/ProductStore";
import Tabletr from "./Tabletr";

const AdminTable = () => {
  const { products, getProducts } = useProduct();

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="flex justify-center py-10">
      <div className="overflow-x-auto">
        <table className="table text-white bg-neutral glass">
          {/* head */}
          <thead className="text-white">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Description</th>
              <th>Price</th>
              <th>Code</th>
              <th>Category</th>
              <th>Stock</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {products &&
              products.map((prod, idx) => (
                <Tabletr key={idx} product={prod} num={idx} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminTable;
