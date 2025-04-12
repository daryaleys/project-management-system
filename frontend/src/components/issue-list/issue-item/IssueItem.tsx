import classes from "./IssueItem.module.css";
import { Issue } from "../../../types/issue-type";
import { issuePriorities, issueStatus } from "../../../consts/issue-consts";

function IssueItem({ title, description, status, boardName, assignee, priority }: Issue) {
	return (
		<div className={classes.issue}>
			<div className={classes.issueInfo}>
				<h3 className={classes.issueTitle}>{title}</h3>
				<span className={classes.issueBoard}>{boardName}</span>
				<span className={classes.issueDescription}>{description}</span>
				<span>{assignee.fullName}</span>
			</div>

			<div className={classes.issueSide}>
				<div>Статус: {issueStatus[status]}</div>
				<span>Приоритет: {issuePriorities[priority]}</span>
			</div>
		</div>
	);
}

export default IssueItem;
