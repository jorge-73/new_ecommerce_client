import axios from "./axios";

export const getProductsRequest = async () => axios.get("/products");