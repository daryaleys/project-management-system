import { useEffect, useMemo, useState } from "react";
import { getIssues } from "../api/issues-api";
import { Issue, IssueFilter } from "../types/issue-type";
import IssueList from "../components/issue-list/IssueList";
import Button from "../components/ui/button/Button";
import Filter from "../components/filter/Filter";
import { issueStatus } from "../consts/issue-consts";
import { getBoards } from "../api/boards-api";
import { Board } from "../types/board-type";

function Issues() {
	const [issues, setIssues] = useState<Issue[]>([]);
	const [loading, setLoading] = useState<boolean>(true);
	const [error, setError] = useState<string | null>(null);
	const [boardOptions, setBoardOptions] = useState<{ value: string; name: string }[]>([]);
	const [filter, setFilter] = useState<IssueFilter>({
		title: "",
		assignee: "",
		status: "",
		boardId: "",
	});

	const statusOptions = Object.entries(issueStatus).map(([value, name]) => ({
		value,
		name,
	}));

	// const [title, setTitle] = useState<string>("");
	// const [description, setDescription] = useState<string>("");

	// const submitForm: MouseEventHandler<HTMLButtonElement> = (event) => {
	// 	event.preventDefault();
	// 	console.log(title, description);
	// };

	const fetchIssues = async () => {
		const data = await getIssues();
		setIssues(data);
	};

	const fetchBoards = async () => {
		const data = await getBoards();
		setBoardOptions(
			data.map((board: Board) => ({
				value: board.id,
				name: board.name,
			}))
		);
	};

	useEffect(() => {
		fetchIssues();
		fetchBoards();
		setLoading(false);
	}, []);

	const filteredIssues = useMemo(() => {
		return issues.filter((issue) => {
			const statusMatch = !filter.status || issue.status === filter.status;
			const boardMatch = !filter.boardId || issue.boardId === Number(filter.boardId);
			const assigneeMatch = !filter.assignee || issue.assignee.fullName.toLowerCase().includes(filter.assignee.toLowerCase());
			const titleMatch = !filter.title || issue.title.toLowerCase().includes(filter.title.toLowerCase());

			return statusMatch && boardMatch && assigneeMatch && titleMatch;
		});
	}, [filter, issues]);

	// const searchedAndFilteredIssues = useMemo(() => {
	// 	return filteredIssues.filter((issue) => issue.title.toLowerCase().includes(filter.search.toLowerCase()) || issue.assignee.fullName.toLowerCase().includes(filter.search.toLowerCase()));
	// }, [filter.search, filteredIssues]);

	const createTask = () => {
		console.log("issues click");
	};

	if (loading) return <div>Loading...</div>;
	if (error) return <div>Error: {error}</div>;
	return (
		<>
			<Filter filter={filter} setFilter={setFilter} statusOptions={statusOptions} boardOptions={boardOptions} />

			{/* <form>
				<Input value={title} type="text" placeholder="Название" onChange={(e) => setTitle((e.target as HTMLInputElement).value)} />
				<Input value={description} type="text" placeholder="Описание" onChange={(e) => setDescription((e.target as HTMLInputElement).value)} />
				<Button onClick={submitForm}>Сабмит формы</Button>
			</form> */}
			<IssueList issues={filteredIssues} />
			<Button onClick={createTask}>Создать задачу</Button>
		</>
	);
}

export default Issues;
