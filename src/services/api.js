import axios from "axios";

axios.defaults.baseURL = "https://jsonplaceholder.typicode.com";

const instance = axios.create({});

export default instance;