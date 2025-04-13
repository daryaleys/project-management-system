import { MouseEventHandler, useEffect, useState } from "react";
import classes from "./TaskForm.module.css";
import Input from "../ui/input/Input";
import Button from "../ui/button/Button";
import { TaskFormData, TaskFormErrors } from "../../types/tasks.type";
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

const getInitialFields = (): TaskFormData | TaskFormErrors => ({
	title: "",
	description: "",
	priority: "",
	status: "",
	boardId: "",
	assigneeId: "",
});

function TaskForm({ taskId, initialData, onSuccess }: TaskFormProps) {
	const isTasksPage = useMatch("/tasks");
	const isBoardDetailPage = useMatch("/boards/:id");
	const navigate = useNavigate();

	// Состояние формы
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
	const [formErrors, setFormErrors] = useState(getInitialFields() as TaskFormErrors);

	// Методы API
	const { error: createError, isPending: createPending, isSuccess: createSuccess, mutate: createMutate } = useCreatingTask(onSuccess);
	const { error: updateError, isPending: updatePending, isSuccess: updateSuccess, mutate: updateMutate } = useUpdatingTask(taskId!, onSuccess);

	// Заполняем опции селектов
	const statusOptions = useStatusOptions();
	const priorityOptions = usePriorityOptions();
	const boardOptions = useBoardOptions();
	const userOptions = useUserOptions();

	// Управляем состоянием формы в зависимости от начальных данных и текущей страницы
	useEffect(() => {
		if (initialData) setFormData(initialData);
		if (isTasksPage && initialData) setShowBoardButton(true);
		if (isBoardDetailPage && initialData) setStaticBoardId(true);
	}, [initialData]);

	// Заполняем объект formData при изменениях в полях
	const handleChange = (field: keyof TaskFormData, value: number | string) => {
		setFormData({
			...formData,
			[field]: value,
		});
	};

	// Обработчик кнопки "Перейти к доске"
	const goToBoard: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();
		if (initialData?.boardId) {
			navigate(`/boards/${initialData?.boardId}`);
			setStaticBoardId(true);
			setShowBoardButton(false);
		}
	};

	// Валидация
	const validateForm = (): boolean => {
		let isValid = true;
		const newErrors = getInitialFields() as TaskFormErrors;

		Object.entries(formData).forEach(([key, value]) => {
			if (!value) {
				newErrors[key as keyof TaskFormData] = "Поле обязательно для заполнения";
				isValid = false;
			}
		});

		setFormErrors(newErrors);
		return isValid;
	};

	// Отправка формы
	const submitForm: MouseEventHandler<HTMLButtonElement> = (event) => {
		event.preventDefault();

		setFormErrors(getInitialFields() as TaskFormErrors);
		if (!validateForm()) return;

		initialData ? updateMutate(formData) : createMutate(formData);
	};

	if (createPending || updatePending) return <div>Отправляем...</div>;
	if (createError || updateError) return <div>Не удалось отправить информацию</div>;
	if (createSuccess || updateSuccess) return <div>Задача {initialData ? "обновлена" : "создана"}!</div>;
	return (
		<form className={classes.form}>
			<h3 className={classes.formTitle}>{initialData ? "Редактирование" : "Создание"} задачи</h3>

			<Input value={formData.title} type="text" placeholder="Название" onChange={(e) => handleChange("title", e.target.value)} />
			{formErrors.title && <span className={classes.formError}>{formErrors.title}</span>}

			<Textarea value={formData.description} placeholder="Описание" onChange={(e) => handleChange("description", e.target.value)} />
			{formErrors.description && <span className={classes.formError}>{formErrors.description}</span>}

			<Select defaultValue="Проект" options={boardOptions} value={formData.boardId?.toString()} disabled={staticBoardId} onValueChange={(value) => handleChange("boardId", Number(value))} />
			{formErrors.boardId && <span className={classes.formError}>{formErrors.boardId}</span>}

			<Select defaultValue="Приоритет" options={priorityOptions} value={formData.priority} onValueChange={(value) => handleChange("priority", value)} />
			{formErrors.priority && <span className={classes.formError}>{formErrors.priority}</span>}

			<Select defaultValue="Статус" options={statusOptions} value={formData.status} onValueChange={(value) => handleChange("status", value)} />
			{formErrors.status && <span className={classes.formError}>{formErrors.status}</span>}

			<Select defaultValue="Исполнитель" options={userOptions} value={formData.assigneeId.toString()} onValueChange={(value) => handleChange("assigneeId", Number(value))} />
			{formErrors.assigneeId && <span className={classes.formError}>{formErrors.assigneeId}</span>}

			<div className={classes.formActions}>
				{showBoardButton && <Button onClick={goToBoard}>Перейти на доску</Button>}
				<Button onClick={submitForm}>{initialData ? "Обновить" : "Создать"}</Button>
			</div>
		</form>
	);
}

export default TaskForm;
