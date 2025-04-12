import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./api-client";

export const useBoards = () => {
	return useQuery({
		queryKey: ["boards"],
		queryFn: async () => {
			const { data } = await apiClient.get("/boards");
			return data.data;
		},
		refetchOnWindowFocus: false,
	});
};

export const useBoardTasks = (id: number) => {
	return useQuery({
		queryKey: ["board", id],
		queryFn: async () => {
			const { data } = await apiClient.get(`/boards/${id}`);
			return data.data;
		},
		refetchOnWindowFocus: false,
	});
};
