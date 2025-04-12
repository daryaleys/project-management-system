import { Issue } from "../../types/issue-type";
import classes from "./IssueList.module.css";
import IssueItem from "./issue-item/IssueItem";

function IssueList({ issues }: { issues: Issue[] }) {
	return (
		<div className={classes.issues}>
			<span className={classes.issuesCount}>Количество задач: {issues.length}</span>
			<div className={classes.issuesList}>
				{issues.map((issue) => (
					<IssueItem {...issue} key={issue.id} />
				))}
			</div>
		</div>
	);
}

export default IssueList;
