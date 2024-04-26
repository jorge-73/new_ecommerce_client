import { FaShoppingCart } from "react-icons/fa";
import CartProduct from "./CartProduct";

const CartModal = ({ cart }) => {
  const cartLength =
    (cart.products &&
      cart.products.reduce((acc, prod) => acc + prod.quantity, 0)) ||
    0;

  return (
    <>
      <FaShoppingCart
        onClick={() => document.getElementById("my_modal_5").showModal()}
      />
      <sup className="transform -translate-x-2">{cartLength}</sup>{" "}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-neutral glass text-white">
          <div className="flex bg-slate-100 rounded-md text-black">
            <div className="w-1/2 p-4">
              <h2 className="font-bold text-lg">Shopping Cart</h2>
              <div className="divider"></div>
              {cart.products &&
                cart.products.map((prod, idx) => (
                  <CartProduct key={idx} product={prod} />
                ))}
            </div>
            <div className="w-1/2 p-4">
              <h2 className="font-bold text-lg">Summary</h2>
              <div className="divider"></div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              <button className="btn">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartModal;
