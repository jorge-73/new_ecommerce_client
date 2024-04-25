import axios from "./axios";

export const getProductsRequest = async () => axios.get("/products");
export const getProductRequest = async (pid) => axios.get(`/products/${pid}`);
export const createProductRequest = async (data) => axios.post("/products", data);
export const updateProductRequest = async (pid, data) => axios.put(`/products/${pid}`, data);
export const deleteProductRequest = async (pid) => axios.delete(`/products/${pid}`);