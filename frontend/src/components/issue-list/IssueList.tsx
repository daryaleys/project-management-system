import classes from "./IssueList.module.css";
import { Issue } from "../../types/issue-type";
import IssueItem from "../issue-item/IssueItem";

function IssueList({ issues }: { issues: Issue[] }) {
	return (
		<div className={classes.issues}>
			{issues.map((issue) => (
				<IssueItem {...issue} key={issue.id} />
			))}
		</div>
	);
}

export default IssueList;
