import Axios from "axios";

const axios = Axios.create({ withCredentials: true });

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_API_URL;

export default axios;
