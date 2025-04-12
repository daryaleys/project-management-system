import { Task } from "../../../types/tasks.type";
import classes from "./BoardTaskItem.module.css";

function BoardTaskItem({ title, description }: Task) {
	return (
		<button className={classes.task}>
			<span className={classes.taskTitle}>{title}</span>
			<span className={classes.taskDescription}>{description}</span>
		</button>
	);
}

export default BoardTaskItem;
