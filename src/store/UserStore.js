import { create } from "zustand";
import { addFilesRequest, changeRoleRequest, getAllUsersRequest } from "@/apis/user";

const useUsers = create((set) => ({
  users: [],
  errors: [],
  loading: true,
  imageUrl: "http://localhost:8000/img",

  getAllUsers: async () => {
    try {
      const res = await getAllUsersRequest();
      set({ users: res.data.payload, errors: [], loading: false });
    } catch (error) {
      set({ errors: error.response.data, loading: false });
      return error.response.data;
    }
  },

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
