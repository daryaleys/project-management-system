import classes from "./BoardIssues.module.css";
import { Issue } from "../../types/issue-type";
import BoardIssueItem from "./board-issue-item/BoardIssueItem";
import { BoardIssueList } from "../../types/board-type";

interface BoardIssuesProps {
	issueList: BoardIssueList[];
}

function BoardIssues({ issueList }: BoardIssuesProps) {
	return (
		<div className={classes.issuesGrid}>
			{issueList.map((issueType) => (
				<div className={classes.issuesColumn} key={issueType.name}>
					<h3 className={classes.columnTitle}>{issueType.title}</h3>

					{issueType.issues.map((issue: Issue) => (
						<BoardIssueItem {...issue} key={issue.id} />
					))}
				</div>
			))}
		</div>
	);
}

export default BoardIssues;
