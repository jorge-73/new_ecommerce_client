import axios from "./axios";

export const getProductsRequest = async () => axios.get("/products");
export const getProductRequest = async (pid) => axios.get(`/products/${pid}`);
