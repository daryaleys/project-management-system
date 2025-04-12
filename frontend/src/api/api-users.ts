import { useQuery } from "@tanstack/react-query";
import { apiClient } from "./api-client";

export const useUsers = () => {
	return useQuery({
		queryKey: ["users"],
		queryFn: async () => {
			const { data } = await apiClient.get("/users");
			return data.data;
		},
		refetchOnWindowFocus: false,
	});
};
