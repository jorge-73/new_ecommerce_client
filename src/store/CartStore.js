import { create } from "zustand";
import { addProductToCartRequest, getCartRequest } from "@/apis/carts";

const useCart = create((set) => ({
  // Estado inicial del contexto del carrito
  cart: [],
  errors: [],
  loading: true,

  // Acción para buscar el carrito del usuario
  getCart: async (cid) => {
    try {
      const res = await getCartRequest(cid);
      set({ cart: res.data.payload, errors: [], loading: false });
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },

  // Acción para agregar un producto al carrito
  addProductToCart: async (cid, pid) => {
    try {
      await addProductToCartRequest(cid, pid);
      const res = await getCartRequest(cid);
      set({ cart: res.data.payload, errors: [], loading: false });
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },
}));

export default useCart;