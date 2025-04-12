import { useParams } from "react-router";
import { getBoardIssues } from "../api/boards-api";
import { useEffect, useState } from "react";
import { Issue, IssueStatusEnum } from "../types/issue-type";
import BoardIssues from "../components/board-issues/BoardIssues";

function Board() {
	let params = useParams();

	const [boardIssuesList, setBoardsIssuesList] = useState<{ name: string; title: string; issues: Issue[] }[]>([]);

	const fetchBoardIssues = async () => {
		const issues = await getBoardIssues(Number(params.id));

		setBoardsIssuesList(
			Object.entries(IssueStatusEnum).map(([name, title]) => ({
				name,
				title,
				issues: issues.filter((issue: Issue) => issue.status === name),
			}))
		);
	};

	useEffect(() => {
		fetchBoardIssues();
	}, []);

	return (
		<>
			<BoardIssues issueList={boardIssuesList} />
		</>
	);
}

export default Board;
