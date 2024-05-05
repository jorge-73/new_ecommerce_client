import { FaShoppingCart } from "react-icons/fa";
import { useRouter } from "next/navigation";
import CartProduct from "./CartProduct";
import useCart from "@/store/CartStore";
import toast from "react-hot-toast";
import Swal from "sweetalert2";

const CartModal = ({ cart }) => {
  const router = useRouter();
  const { deleteCart } = useCart();
  const subTotal =
    (cart?.products &&
      cart.products.reduce((acc, prod) => acc + prod.product.price, 0)) ||
    0;
  const shipping = 4.0;
  const tax = 4.0;
  const totalPurchase = subTotal && (subTotal + shipping + tax).toFixed(2);
  const emptyCart =
    cart?.products === undefined || cart?.products?.length === 0;

  const handleEmptyCart = async (cid) => {
    const res = await deleteCart(cid);
    if (res?.error) return toast.error(res?.error);
    toast.success("The cart has been emptied");
  };

  const handleCheckout = async (cid) => {
    if (emptyCart) return toast.error("The cart is empty");

    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Thank you for your purchase.!",
      showConfirmButton: false,
      timer: 1500
    });

    setTimeout(() => {
      router.push(`/payments/${cid}`);
    }, 1200);
  };

  return (
    <>
      <FaShoppingCart
        onClick={() => document.getElementById("my_modal").showModal()}
      />
      <dialog id="my_modal" className="modal">
        <div className="modal-box w-11/12 max-w-5xl bg-neutral glass text-white">
          <div className="flex bg-slate-100 rounded-md text-black">
            <div className="w-1/2 p-4">
              <h2 className="font-bold text-lg">Shopping Cart</h2>
              <div className="divider"></div>
              <div className="overflow-y-auto max-h-96">
                {cart.products &&
                  cart.products.map((prod, idx) => (
                    <CartProduct key={idx} product={prod} />
                  ))}
              </div>
            </div>
            <div className="w-1/2 p-4">
              <div className="bg-white h-max rounded-md p-6 shadow-[0_0px_4px_0px_rgba(6,81,237,0.2)] sticky top-0">
                <h3 className="text-xl font-extrabold [#333] border-b pb-3">
                  Order Summary
                </h3>
                <ul className="text-[#333] text-sm divide-y mt-6">
                  <li className="flex flex-wrap gap-4 py-3">
                    Subtotal{" "}
                    <span className="ml-auto font-bold">
                      ${subTotal.toFixed(2)}
                    </span>
                  </li>
                  <li className="flex flex-wrap gap-4 py-3">
                    Shipping{" "}
                    <span className="ml-auto font-bold">${shipping}</span>
                  </li>
                  <li className="flex flex-wrap gap-4 py-3">
                    Tax <span className="ml-auto font-bold">${tax}</span>
                  </li>
                  <li className="flex flex-wrap gap-4 py-3 font-bold">
                    Total <span className="ml-auto">${totalPurchase}</span>
                  </li>
                </ul>
                <button
                  type="button"
                  className="mt-6 text-sm px-6 py-2.5 w-full bg-[#333] hover:bg-[#111] text-white rounded-full"
                  onClick={() => handleCheckout(cart._id)}
                >
                  Check out
                </button>
              </div>
            </div>
          </div>
          <div className="modal-action">
            {!emptyCart && (
              <button
                className="btn btn-sm btn-error font-bold"
                onClick={() => handleEmptyCart(cart._id)}
              >
                Empty cart
              </button>
            )}
            <form method="dialog">
              <button className="btn btn-sm font-bold">Close</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

export default CartModal;
