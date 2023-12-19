import axios from "axios";
import { BASE_URL } from "@/constants/api";


const instance = axios.create({
   baseURL: BASE_URL,
   headers: {
      'Content-type': 'application/json; charset=UTF-8',
   }
});

export default instance;