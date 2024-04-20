import { create } from "zustand";
import { persist } from "zustand/middleware";
import { getProductsRequest } from "@/apis/products.js";

const useProduct = create(
  persist(
    (set) => ({
      // Estado inicial del contexto de productos
      products: null,
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
    }),
    { name: "product-storage" }
  )
);

export default useProduct;
