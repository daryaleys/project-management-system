import { TaskStatus } from "../../../types/tasks.type";
import classes from "./BoardTaskItem.module.css";

interface BoardTaskProps {
	title: string;
	description: string;
	status: TaskStatus;
	onClick(): void;
}

function BoardTaskItem({ title, description, status, onClick }: BoardTaskProps) {
	return (
		<button className={`${classes.task} ${status}`} onClick={onClick}>
			<span className={classes.taskTitle}>{title}</span>
			<span className={classes.taskDescription}>{description}</span>
		</button>
	);
}

export default BoardTaskItem;
