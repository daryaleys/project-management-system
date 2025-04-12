import { useMemo, useState } from "react";
import { TaskFilter, TaskStatusEnum, Task } from "../types/tasks.type";
import TaskList from "../components/task-list/TaskList";
import Button from "../components/ui/button/Button";
import Filter from "../components/filter/Filter";
import { Board } from "../types/boards.type";
import { useTasks } from "../api/api-tasks";
import { useBoards } from "../api/api-boards";

function TasksPage() {
	const { data: tasks, isLoading: tasksLoading, error: tasksError } = useTasks();
	const { data: boards, isLoading: boardsLoading, error: boardsError } = useBoards();

	const [filter, setFilter] = useState<TaskFilter>({
		title: "",
		assignee: "",
		status: "",
		boardId: "",
	});

	const statusOptions = useMemo(() => Object.entries(TaskStatusEnum).map(([value, name]) => ({ value, name })), []);
	const boardOptions = useMemo(() => {
		return (
			boards?.map((board: Board) => ({
				value: board.id,
				name: board.name,
			})) ?? []
		);
	}, [tasks]);

	// const [title, setTitle] = useState<string>("");
	// const [description, setDescription] = useState<string>("");

	// const submitForm: MouseEventHandler<HTMLButtonElement> = (event) => {
	// 	event.preventDefault();
	// 	console.log(title, description);
	// };

	const filteredTasks = useMemo(() => {
		return (
			tasks?.filter((task: Task) => {
				const statusMatch = !filter.status || task.status === filter.status;
				const boardMatch = !filter.boardId || task.boardId === Number(filter.boardId);
				const assigneeMatch = !filter.assignee || task.assignee.fullName.toLowerCase().includes(filter.assignee.toLowerCase());
				const titleMatch = !filter.title || task.title.toLowerCase().includes(filter.title.toLowerCase());

				return statusMatch && boardMatch && assigneeMatch && titleMatch;
			}) ?? []
		);
	}, [filter.title, filter.assignee, filter.status, filter.boardId, tasks]);

	const createTask = () => {
		console.log("tasks click");
	};

	if (tasksLoading || boardsLoading) return <div>Загрузка...</div>;
	if (tasksError || boardsError) return <div>Что-то пошло не так</div>;
	return (
		<>
			<Filter filter={filter} setFilter={setFilter} statusOptions={statusOptions} boardOptions={boardOptions} />

			{/* <form>
				<Input value={title} type="text" placeholder="Название" onChange={(e) => setTitle((e.target as HTMLInputElement).value)} />
				<Input value={description} type="text" placeholder="Описание" onChange={(e) => setDescription((e.target as HTMLInputElement).value)} />
				<Button onClick={submitForm}>Сабмит формы</Button>
			</form> */}
			<TaskList tasks={filteredTasks} />
			<Button onClick={createTask}>Создать задачу</Button>
		</>
	);
}

export default TasksPage;
