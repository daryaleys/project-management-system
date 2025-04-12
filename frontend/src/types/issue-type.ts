export type IssuePriority = "Low" | "Medium" | "High";
export type IssueStatus = "InProgress" | "Done" | "Backlog";

export type Issue = {
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
	priority: IssuePriority;
	status: IssueStatus;
	title: string;
};

export type IssueFilter = {
	title: string;
	assignee: string;
	status: IssueStatus | "";
	boardId: string;
};

export enum IssuePriorityEnum {
	Low = "Низкий",
	Medium = "Средний",
	High = "Высокий",
}

export enum IssueStatusEnum {
	Backlog = "В бэклоге",
	InProgress = "В работе",
	Done = "Готово",
}
