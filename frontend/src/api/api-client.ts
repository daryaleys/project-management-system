import axios from "axios";
import { BASE_URL } from "../consts/consts";

export const apiClient = axios.create({
	baseURL: BASE_URL,
});
