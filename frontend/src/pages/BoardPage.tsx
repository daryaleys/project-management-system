import { useParams } from "react-router";
import { useContext, useMemo } from "react";
import { Task, TaskFormData } from "../types/tasks.type";
import BoardTasks from "../components/board-tasks/BoardTasks";
import { useBoardTasks } from "../api/api-boards";
import { BoardTasksList } from "../types/boards.type";
import { ModalContext } from "../context/ModalContext";
import TaskForm from "../components/task-form/TaskForm";

function BoardPage() {
	const { id } = useParams<{ id: string }>();
	const { data: tasks, isLoading, error, refetch } = useBoardTasks(Number(id));
	const { openModal } = useContext(ModalContext);

	const boardTasks: BoardTasksList = useMemo(() => {
		return {
			Backlog: tasks?.filter((task: Task) => task.status === "Backlog") ?? [],
			InProgress: tasks?.filter((task: Task) => task.status === "InProgress") ?? [],
			Done: tasks?.filter((task: Task) => task.status === "Done") ?? [],
		};
	}, [tasks]);

	const openTask = (task: Task) => {
		const initialData: TaskFormData = { ...task, boardId: Number(id), assigneeId: task.assignee.id };
		openModal(<TaskForm taskId={task.id} initialData={initialData} onSuccess={() => refetch()} />);
	};

	if (isLoading) return <div>Загрузка...</div>;
	if (error) return <div>Что-то пошло не так</div>;
	return (
		<>
			<BoardTasks tasks={boardTasks} openTask={openTask} />
		</>
	);
}

export default BoardPage;
