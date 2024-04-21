import axios from "./axios";

export const changeRoleRequest = async (uid) =>
  axios.post(`/users/premium/${uid}`);
export const addFilesRequest = async (uid, data) =>
  axios.post(`/users/${uid}/documents`, data, {
    headers: {
      "Content-Type": "multipart/form-data",
    },
  });
