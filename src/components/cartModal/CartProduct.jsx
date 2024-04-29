"use client";
import useCart from "@/store/CartStore";
import { FaTrashAlt } from "react-icons/fa";

const CartProduct = ({ product }) => {
  const { cart, deleteProductInCart } = useCart();

  const thumbnailUrl =
    product?.product?.thumbnails.length > 0
      ? `${process.env.NEXT_PUBLIC_BACKEND_URL}/img/products/${product?.product?.thumbnails[0]}`
      : "/notAvailable.png";

  return (
    <>
      <div className="flex items-center justify-between mt-6">
        {/* Imagen del producto */}
        <div className="flex items-center">
          <div className="w-24 rounded">
            <img src={thumbnailUrl} alt={product?.product?.title} />
          </div>
        </div>

        {/* Detalles del producto */}
        <div className="flex flex-col items-center flex-grow ml-4">
          <h3 className="text-sm font-bold">{product?.product?.title}</h3>
          <p className="text-sm">${product?.product?.price?.toFixed(2)}</p>
          <p className="text-sm">
            Quantity:
            <button className="btn btn-sm btn-neutral mx-1">{"<"}</button>
            {product?.quantity}
            <button className="btn btn-sm btn-neutral mx-1">{">"}</button>
          </p>
        </div>

        {/* Botón de eliminar */}
        <div>
          <button 
          className="btn btn-neutral btn-sm text-white btn-circle"
          onClick={() => deleteProductInCart(cart?._id, product?.product?._id)}
          >
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default CartProduct;
