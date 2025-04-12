import axios from "axios";
import { BASE_URL } from "../consts/consts";

export const getBoards = async () => {
	try {
		const response = await axios.get(`${BASE_URL}/boards`);
		return response.data.data;
	} catch (error) {
		console.log(error);
	}
};

export const getBoardIssues = async (id: number) => {
	try {
		const response = await axios.get(`${BASE_URL}/boards/${id}`);
		return response.data.data;
	} catch (error) {
		console.log(error);
	}
};
