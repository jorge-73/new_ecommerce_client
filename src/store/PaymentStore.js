import {
  createPaymentsRequest,
  getPurchaseRequest,
  getTicketRequest,
} from "@/apis/payments";
import { create } from "zustand";

const usePayment = create((set) => ({
  // Estado inicial del contexto del carrito
  errors: [],
  loading: true,

  createPayments: async (cid) => {
    try {
      const res = await createPaymentsRequest(cid);
      return res?.data?.payload;
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },

  getPurchase: async (cid) => {
    try {
      const res = await getPurchaseRequest(cid);
      return res.data.payload;
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },

  getTicketPurchase: async (tid) => {
    try {
      const res = await getTicketRequest(tid);
      return res.data.payload;
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },
}));

export default usePayment;
