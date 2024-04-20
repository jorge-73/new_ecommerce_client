import { create } from "zustand";
import { addFilesRequest } from "@/apis/user";

const useUsers = create((set) => ({
  errors: [],
  loading: true,
  imageUrl: "http://localhost:8000/img",

  addFiles: async (uid, data) => {
    try {
      await addFilesRequest(uid, data);
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      // toast.error(error?.response?.data);
    }
  },
}));

export default useUsers;
