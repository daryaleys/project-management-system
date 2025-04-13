import classes from "./TaskItem.module.css";
import { PRIORITY, STATUS, Task } from "../../../types/tasks.type";

interface TaskItemProps {
	task: Task;
	onClick(): void;
}

function TaskItem({ task, onClick }: TaskItemProps) {
	return (
		<button onClick={onClick} className={`${classes.task} ${task.priority}`}>
			<div className={classes.taskInfo}>
				<h3 className={classes.taskTitle}>{task.title}</h3>
				<span className={classes.taskBoard}>{task.boardName}</span>
				<span className={classes.taskDescription}>{task.description}</span>
				<span>Исполнитель: {task.assignee.fullName}</span>
			</div>

			<div className={classes.taskSide}>
				<div>
					Статус: <span className={`${classes.taskStatus} ${task.status}`}>{STATUS[task.status]}</span>
				</div>
				<div>
					Приоритет: <span className={`${classes.taskPriority} ${task.priority}`}>{PRIORITY[task.priority]}</span>
				</div>
			</div>
		</button>
	);
}

export default TaskItem;
