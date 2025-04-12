import classes from "./BoardTaskItem.module.css";

interface BoardTaskProps {
	title: string;
	description: string;
	onClick(): void;
}

function BoardTaskItem({ title, description, onClick }: BoardTaskProps) {
	return (
		<button className={classes.task} onClick={onClick}>
			<span className={classes.taskTitle}>{title}</span>
			<span className={classes.taskDescription}>{description}</span>
		</button>
	);
}

export default BoardTaskItem;
