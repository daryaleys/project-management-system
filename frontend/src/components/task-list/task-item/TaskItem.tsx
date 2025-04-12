import classes from "./TaskItem.module.css";
import { Task, TaskPriorityEnum, TaskStatusEnum } from "../../../types/tasks.type";

function TaskItem({ title, description, status, boardName, assignee, priority }: Task) {
	return (
		<div className={classes.task}>
			<div className={classes.taskInfo}>
				<h3 className={classes.taskTitle}>{title}</h3>
				<span className={classes.taskBoard}>{boardName}</span>
				<span className={classes.taskDescription}>{description}</span>
				<span>Исполнитель: {assignee.fullName}</span>
			</div>

			<div className={classes.taskSide}>
				<span>Статус: {TaskStatusEnum[status]}</span>
				<span>Приоритет: {TaskPriorityEnum[priority]}</span>
			</div>
		</div>
	);
}

export default TaskItem;
