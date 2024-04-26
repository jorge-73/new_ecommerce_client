"use client";
import Link from "next/link";
import { useAuth } from "@/contexts/AuthContext";
import useCart from "@/store/CartStore";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdInformationCircleOutline } from "react-icons/io";
import toast from "react-hot-toast";

const ProductCart = ({ product, isAdmin }) => {
  const { user } = useAuth();
  const { addProductToCart } = useCart();
  const thumbnailUrl =
    product?.thumbnails.length > 0
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/img/products/${product?.thumbnails[0]}`
      : "/notAvailable.png";

  const addToCart = async (pid) => {
    const res = addProductToCart(user?.cart, pid);
    if (res.error) return toast.error(res.error);

    toast.success("Product added to cart");
  };

  return (
    <div className="card glass text-white w-3/4 md:w-full mx-auto hover:cursor-pointer hover:shadow-md hover:shadow-slate-400 transition duration-300 ease-out hover:ease-in">
      <figure>
        <img
          src={thumbnailUrl}
          alt={product?.title}
          className="w-full h-56 object-contain p-2"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title mx-auto">{product?.title}</h2>
        <p>{product?.description}</p>
        <div className="flex justify-between items-center">
          <p>${product?.price}</p>
          <p className="text-end">Stock: {product?.stock}</p>
        </div>
        <div className="card-actions justify-between items-center">
          <Link href={`/products/${product?._id}`} className="btn btn-accent">
            <IoMdInformationCircleOutline />
            Info
          </Link>
          <button
            onClick={() => addToCart(product?._id)}
            className={`btn btn-primary ${isAdmin && "btn-disabled"}`}
          >
            <FaShoppingCart />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCart;
