export type TaskPriority = "Low" | "Medium" | "High";
export type TaskStatus = "InProgress" | "Done" | "Backlog";

export const PRIORITY = {
	Low: "Низкий",
	Medium: "Средний",
	High: "Высокий",
} as const;

export const STATUS = {
	Backlog: "В бэклоге",
	InProgress: "В работе",
	Done: "Готово",
} as const;

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

export type TaskFilters = {
	title: string;
	assignee: string;
	status: TaskStatus | "";
	boardId: string;
};

export type TaskFormData = {
	title: string;
	description: string;
	boardId: number | "";
	priority: TaskPriority | "";
	status: TaskStatus | "";
	assigneeId: number | "";
};

export type TaskFormErrors = {
	title: string;
	description: string;
	boardId: string;
	priority: string;
	status: string;
	assigneeId: string;
};

export type TaskStatusData = {
	status: TaskStatus | "";
};
