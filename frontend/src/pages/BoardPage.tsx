import { useParams } from "react-router";
import { useMemo } from "react";
import { Task } from "../types/tasks.type";
import BoardTasks from "../components/board-issues/BoardTasks";
import { useBoardTasks } from "../api/api-boards";
import { BoardTasksList } from "../types/boards.type";

function BoardPage() {
	const { id } = useParams<{ id: string }>();
	const { data: tasks, isLoading, error } = useBoardTasks(Number(id));

	const boardTasks: BoardTasksList = useMemo(() => {
		return {
			Backlog: tasks?.filter((task: Task) => task.status === "Backlog") ?? [],
			InProgress: tasks?.filter((task: Task) => task.status === "InProgress") ?? [],
			Done: tasks?.filter((task: Task) => task.status === "Done") ?? [],
		};
	}, [tasks]);

	if (isLoading) return <div>Loading...</div>;
	if (error) return <div>Error: {error.message}</div>;
	return (
		<>
			<BoardTasks tasks={boardTasks} />
		</>
	);
}

export default BoardPage;
