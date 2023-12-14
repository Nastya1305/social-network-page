import axios from "axios";
import { BASE_URL } from "@/constants/api";

axios.defaults.baseURL = BASE_URL;

const instance = axios.create({});

export default instance;