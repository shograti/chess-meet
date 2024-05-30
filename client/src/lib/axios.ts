import Axios from "axios";

const axios = Axios.create({ withCredentials: true });

axios.defaults.withCredentials = true;

export default axios;
