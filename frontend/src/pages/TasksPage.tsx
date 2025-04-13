import { useContext, useMemo, useState } from "react";
import { TaskFilters, Task, TaskFormData } from "../types/tasks.type";
import TaskList from "../components/task-list/TaskList";
import Button from "../components/ui/button/Button";
import Filter from "../components/task-filter/TaskFilter";
import { useTasks } from "../api/api-tasks";
import useDebounce from "../hooks/useDebounce";
import { ModalContext } from "../context/ModalContext";
import TaskForm from "../components/task-form/TaskForm";

function TasksPage() {
	const { data: tasks, isLoading, error, refetch } = useTasks();
	const { openModal } = useContext(ModalContext);

	const [filter, setFilter] = useState<TaskFilters>({
		title: "",
		assignee: "",
		status: "",
		boardId: "",
	});

	const debouncedTitleSearch = useDebounce(filter.title);
	const debouncedAssigneeSearch = useDebounce(filter.assignee);

	const openTask = (task: Task) => {
		const initialData: TaskFormData = { ...task, assigneeId: task.assignee.id };
		openModal(<TaskForm taskId={task.id} initialData={initialData} onSuccess={() => refetch()} />);
	};

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
	}, [debouncedTitleSearch, debouncedAssigneeSearch, filter.status, filter.boardId, tasks]);

	if (isLoading) return <div>Загрузка...</div>;
	if (error) return <div>Что-то пошло не так</div>;
	return (
		<>
			<Filter filters={filter} setFilters={setFilter} />
			<TaskList tasks={filteredTasks} onClick={openTask} />
			<div>
				<Button style={{ display: "block", marginTop: "15px", marginLeft: "auto" }} onClick={() => openModal(<TaskForm onSuccess={() => refetch()} />)}>
					Создать задачу
				</Button>
			</div>
		</>
	);
}

export default TasksPage;
