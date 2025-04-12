import { MouseEventHandler, useEffect, useState } from "react";
import classes from "./TaskForm.module.css";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import { TaskFormData } from "../../types/tasks.type";
import Select from "../ui/select/Select";
import { useBoardOptions, usePriorityOptions, useStatusOptions, useUserOptions } from "../../hooks/useSelectOptions";
import Textarea from "../ui/textarea/Textarea";
import { useMatch, useNavigate } from "react-router";
import { useCreatingTask, useUpdatingTask } from "../../api/api-tasks";

interface TaskFormProps {
	taskId?: number;
	initialData?: TaskFormData;
	onSuccess(): void;
}

function TaskForm({ taskId, initialData, onSuccess }: TaskFormProps) {
	const isTasksPage = useMatch("/tasks");
	const isBoardDetailPage = useMatch("/boards/:id");
	const navigate = useNavigate();

	const [staticBoardId, setStaticBoardId] = useState(false);
	const [showBoardButton, setShowBoardButton] = useState(false);
	const [formData, setFormData] = useState<TaskFormData>({
		title: "",
		description: "",
		priority: "",
		status: "",
		boardId: "",
		assigneeId: "",
	});

	const { error: createError, isPending: createPending, isSuccess: createSuccess, mutate: createMutate } = useCreatingTask(onSuccess);
	const { error: updateError, isPending: updatePending, isSuccess: updateSuccess, mutate: updateMutate } = useUpdatingTask(taskId!, onSuccess);

	const statusOptions = useStatusOptions();
	const priorityOptions = usePriorityOptions();
	const boardOptions = useBoardOptions();
	const userOptions = useUserOptions();

	useEffect(() => {
		if (initialData) setFormData(initialData);
		if (isTasksPage && initialData) setShowBoardButton(true);
		if (isBoardDetailPage && initialData) setStaticBoardId(true);
	}, [initialData]);

	const handleChange = (field: keyof TaskFormData, value: number | string) => {
		setFormData({
			...formData,
			[field]: value,
		});
	};

	const goToBoard: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		if (initialData?.boardId) navigate(`/boards/${initialData?.boardId}`);
		setStaticBoardId(true);
		setShowBoardButton(false);
	};

	const submitForm: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		initialData ? updateMutate(formData) : createMutate(formData);
	};

	if (createPending || updatePending) return <div>Отправляем...</div>;
	if (createError || updateError) return <div>Не удалось отправить информацию</div>;
	if (createSuccess || updateSuccess) return <div>Задача {initialData ? "обновлена" : "создана"}!</div>;
	return (
		<form className={classes.form}>
			<h3 className={classes.formTitle}>{initialData ? "Редактирование" : "Создание"} задачи</h3>
			<Input value={formData.title} type="text" placeholder="Название" onChange={(e) => handleChange("title", e.target.value)} />
			<Textarea value={formData.description} placeholder="Описание" onChange={(e) => handleChange("description", e.target.value)} />
			<Select defaultValue="Проект" options={boardOptions} value={formData.boardId?.toString()} disabled={staticBoardId} onChange={(value) => handleChange("boardId", Number(value))} />
			<Select defaultValue="Приоритет" options={priorityOptions} value={formData.priority} onChange={(value) => handleChange("priority", value)} />
			<Select defaultValue="Статус" options={statusOptions} value={formData.status} onChange={(value) => handleChange("status", value)} />
			<Select defaultValue="Исполнитель" options={userOptions} value={formData.assigneeId.toString()} onChange={(value) => handleChange("assigneeId", Number(value))} />

			<div className={classes.formActions}>
				{showBoardButton && initialData && <Button onClick={goToBoard}>Перейти на доску</Button>}
				<Button onClick={submitForm}>{initialData ? "Обновить" : "Создать"}</Button>
			</div>
		</form>
	);
}

export default TaskForm;
