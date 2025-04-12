import { Issue } from "../../../types/issue-type";
import classes from "./BoardIssueItem.module.css";

function BoardIssueItem({ title, description }: Issue) {
	return (
		<button className={classes.issue}>
			<span className={classes.issueTitle}>{title}</span>
			<span className={classes.issueDescription}>{description}</span>
		</button>
	);
}

export default BoardIssueItem;
