import axios from "axios";
import { BASE_URL } from "../consts/consts";

export const getIssues = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/tasks`);
		return response.data.data;
	} catch (error) {
		console.log(error);
	}
};
