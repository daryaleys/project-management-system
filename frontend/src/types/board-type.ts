import { Issue } from "./issue-type";

export type Board = {
	description: string;
	id: number;
	name: string;
	taskCount: number;
};

export type BoardIssueList = {
	name: string;
	title: string;
	issues: Issue[];
};
