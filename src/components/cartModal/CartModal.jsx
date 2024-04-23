import { FaShoppingCart } from "react-icons/fa";

const CartModal = () => {
  return (
    <>
      <FaShoppingCart
        onClick={() => document.getElementById("my_modal_5").showModal()}
      />
      <sup className="transform -translate-x-2">0</sup>{" "}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box bg-neutral glass text-white">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Cart Products</p>
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
