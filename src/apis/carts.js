import axios from "./axios";

export const getCartRequest = async (cid) => axios.get(`/carts/${cid}`);
export const addProductToCartRequest = async (cid, pid) =>
  axios.post(`/carts/${cid}/product/${pid}`);
