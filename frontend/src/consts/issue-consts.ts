import { IssuePriority, IssueStatus } from "../types/issue-type";

export const issuePriorities: Record<IssuePriority, string> = {
	Low: "Низкий",
	Medium: "Средний",
	High: "Высокий",
};

export const issueStatus: Record<IssueStatus, string> = {
	InProgress: "В работе",
	Done: "Готово",
	Backlog: "В бэклоге",
};
