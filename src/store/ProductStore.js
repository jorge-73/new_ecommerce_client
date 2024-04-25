import { create } from "zustand";
import {
  createProductRequest,
  deleteProductRequest,
  getProductRequest,
  getProductsRequest,
  updateProductRequest,
} from "@/apis/products.js";

const useProduct = create((set) => ({
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
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },

  // Acción para traer un producto
  getProductById: async (pid) => {
    try {
      const res = await getProductRequest(pid);
      set({ errors: [], loading: false });
      return res.data.payload;
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },

  // Acción para crear un producto
  createProduct: async (data) => {
    try {
      await createProductRequest(data);
      const res = await getProductsRequest();
      set({ products: res.data.payload, errors: [], loading: false });
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },

  // Acción para editar un producto
  updateProduct: async (pid, data) => {
    try {
      await updateProductRequest(pid, data);
      const res = await getProductsRequest();
      set({ products: res.data.payload, errors: [], loading: false });
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },

  // Acción para eliminar un producto
  deleteProduct: async (pid) => {
    try {
      await deleteProductRequest(pid);
      const res = await getProductsRequest();
      set({ products: res.data.payload, errors: [], loading: false });
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },
}));

export default useProduct;
