import { create } from "zustand";
import { addFilesRequest, changeRoleRequest } from "@/apis/user";

const useUsers = create((set) => ({
  errors: [],
  loading: true,
  imageUrl: "http://localhost:8000/img",

  changeRole: async (uid) => {
    try {
      await changeRoleRequest(uid);
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },

  addFiles: async (uid, data) => {
    try {
      await addFilesRequest(uid, data);
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },
}));

export default useUsers;
