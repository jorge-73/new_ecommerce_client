import axios from "./axios";

export const createPaymentsRequest = async (cid) =>
  axios.post(`/payments/createCheckout/${cid}`);
export const getPurchaseRequest = async (cid) => axios.get(`/carts/${cid}/purchase`);
export const getTicketRequest = async (tid) => axios.get(`/payments/getTicket/${tid}`);