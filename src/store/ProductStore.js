import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProductRequest, getProductsRequest } from "@/apis/products.js";

const useProduct = create(
  persist(
    (set) => ({
      // Estado inicial del contexto de productos
      products: null,
      product: null,
      errors: [],
      loading: true,

      // Acción para traer todos los productos
      getProducts: async () => {
        try {
          const res = await getProductsRequest();
          set({ products: res.data.payload, errors: [], loading: false });
        } catch (error) {
          // console.log(error);
          set({ errors: error.response.data, loading: false });
        }
      },

      // Acción para traer un producto
      getProductById: async (pid) => {
        try {
          const res = await getProductRequest(pid);
          set({ product: res.data.payload, errors: [], loading: false });
        } catch (error) {
          set({ errors: error.response.data, loading: false });
          return error.response.data;
        }
      }
    }),
    { name: "product-storage" }
  )
);

export default useProduct;
