import axios from "../lib/axios";

export const authApi = {
  signUp(user) {
    return axios.post("/users", user);
  },
  signIn(credentials) {
    return axios.post("/auth/sign-in", credentials);
  },
  getMe() {
    return axios.get("/users/get-profile");
  },
  logOut() {
    return axios.post("/auth/logout");
  },
};
