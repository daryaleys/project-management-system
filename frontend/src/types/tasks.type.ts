export type TaskPriority = "Low" | "Medium" | "High";
export type TaskStatus = "InProgress" | "Done" | "Backlog";

export enum TaskPriorityEnum {
	Low = "Низкий",
	Medium = "Средний",
	High = "Высокий",
}

export enum TaskStatusEnum {
	Backlog = "В бэклоге",
	InProgress = "В работе",
	Done = "Готово",
}

export type Task = {
	assignee: {
		avatarUrl: string;
		email: string;
		fullName: string;
		id: number;
	};
	assigneeId: number;
	boardId: number;
	boardName: string;
	description: string;
	id: number;
	priority: TaskPriority;
	status: TaskStatus;
	title: string;
};

export type TaskFilter = {
	title: string;
	assignee: string;
	status: TaskStatus | "";
	boardId: string;
};
