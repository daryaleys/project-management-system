import { useMutation, useQuery } from "@tanstack/react-query";
import { apiClient } from "./api-client";
import { TaskFormData, TaskStatusData } from "../types/tasks.type";
import { AxiosResponse } from "axios";

export const useTasks = () => {
	return useQuery({
		queryKey: ["tasks"],
		queryFn: async () => {
			const { data } = await apiClient.get("/tasks");
			return data.data;
		},
		refetchOnWindowFocus: false,
	});
};

export const useTaskById = (id: number) => {
	return useQuery({
		queryKey: ["task"],
		queryFn: async () => {
			const { data } = await apiClient.get(`/tasks/${id}`);
			return data.data;
		},
		refetchOnWindowFocus: false,
	});
};

export const useCreatingTask = (onSuccess?: (data: AxiosResponse<any, any>, variables: TaskFormData, context: unknown) => Promise<unknown> | unknown) => {
	return useMutation({
		mutationFn: (data: TaskFormData) => {
			return apiClient.post("/tasks/create", data);
		},
		onSuccess: onSuccess,
	});
};

export const useUpdatingTask = (id: number, onSuccess?: ((data: AxiosResponse<any, any>, variables: TaskFormData, context: unknown) => unknown) | undefined) => {
	return useMutation({
		mutationFn: (data: TaskFormData) => {
			return apiClient.put(`/tasks/update/${id}`, data);
		},
		onSuccess: onSuccess,
	});
};

export const useUpdatingStatus = (id: number, onSuccess?: ((data: AxiosResponse<any, any>, variables: TaskStatusData, context: unknown) => unknown) | undefined) => {
	return useMutation({
		mutationFn: (data: TaskStatusData) => {
			return apiClient.put(`/tasks/updateStatus/${id}`, data);
		},
		onSuccess: onSuccess,
	});
};
