import { Task, TaskStatus } from "./tasks.type";

export type Board = {
	description: string;
	id: number;
	name: string;
	taskCount: number;
};

export type BoardTasksList = Record<TaskStatus, Task[]>;
