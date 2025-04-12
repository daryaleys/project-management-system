import classes from "./IssueItem.module.css";
import { Issue, IssuePriorityEnum, IssueStatusEnum } from "../../../types/issue-type";

function IssueItem({ title, description, status, boardName, assignee, priority }: Issue) {
	return (
		<div className={classes.issue}>
			<div className={classes.issueInfo}>
				<h3 className={classes.issueTitle}>{title}</h3>
				<span className={classes.issueBoard}>{boardName}</span>
				<span className={classes.issueDescription}>{description}</span>
				<span>Исполнитель: {assignee.fullName}</span>
			</div>

			<div className={classes.issueSide}>
				<span>Статус: {IssueStatusEnum[status]}</span>
				<span>Приоритет: {IssuePriorityEnum[priority]}</span>
			</div>
		</div>
	);
}

export default IssueItem;
