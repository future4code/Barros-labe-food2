import axios from "axios";
import { BASE_URL } from "../constants/constants";

export const Login = async (body) => {
    const { data } = await axios.post(`${BASE_URL}/login`, body)
    return data;
}