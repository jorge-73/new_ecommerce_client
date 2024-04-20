import axios from "./axios";

export const registerRequest = async (data) =>
  axios.post("/auth/register", data);
export const loginRequest = async (data) => axios.post("/auth/login", data);
export const logoutRequest = async () => axios.post("/auth/logout");

export const passwordChangeRequest = async (email) =>
  axios.post("/auth/passwordChange", email);
export const newPasswordRequest = async (tid, data) =>
  axios.post(`/auth/newPassword/${tid}`, data);
