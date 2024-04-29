import axios from "./axios";

export const getCartRequest = async (cid) => axios.get(`/carts/${cid}`);
export const addProductToCartRequest = async (cid, pid) =>
  axios.post(`/carts/${cid}/product/${pid}`);
export const deleteProductInCartRequest = async (cid, pid) =>
  axios.delete(`/carts/${cid}/product/${pid}`);
