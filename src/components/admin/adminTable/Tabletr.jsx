"use client";
import useProduct from "@/store/ProductStore";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { FaTrashAlt } from "react-icons/fa";
import { FaRegEdit } from "react-icons/fa";

const Tabletr = ({ product, num }) => {
  const router = useRouter();
  const {deleteProduct} = useProduct();
  const index = num + 1;

  const handleDelete = async (pid) => {
    const res = await deleteProduct(pid);
    if (res?.error) return toast.error(res?.error);

    toast.success("Product deleted successfully");
  }
  
  return (
    <tr className="hover hover:text-black">
      <th>{index}</th>
      <td>{product?.title}</td>
      <td>{product?.description}</td>
      <td>${product?.price}</td>
      <td>{product?.code}</td>
      <td>{product?.category}</td>
      <td>{product?.stock}</td>
      <td className="flex justify-center items-center">
        <button
          className="btn btn-sm btn-error me-1 text-white"
          onClick={() => handleDelete(product?._id)}
        >
          <FaTrashAlt />
        </button>
        <button
          className="btn btn-sm btn-info me-1"
          onClick={() => router.push(`/admin/${product?._id}`)}
        >
          <FaRegEdit />
        </button>
      </td>
    </tr>
  );
};

export default Tabletr;
