import axios from "axios";
import { BASE_URL } from "../consts/api-consts";

export const getBoards = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/boards`);
		return response.data.data;
	} catch (error) {
		console.log(error);
	}
};
