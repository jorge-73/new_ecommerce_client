import { FaTrashAlt } from "react-icons/fa";

const CartProduct = ({ product }) => {
  return (
    <>
      <div className="flex items-center justify-between mt-6">
        <div>
          <h3 className="text-sm font-bold">{product?.product?.title}</h3>
          <p className="text-sm">€{product?.product?.price?.toFixed(2)}</p>
          <p className="text-sm">Quantity: {product?.quantity}</p>
        </div>
        <div>
          <button className="btn btn-error btn-sm text-white btn-circle">
            <FaTrashAlt />
          </button>
        </div>
      </div>
      <div className="divider"></div>
    </>
  );
};

export default CartProduct;
