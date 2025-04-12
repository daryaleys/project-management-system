import { Task } from "../../types/tasks.type";
import classes from "./TaskList.module.css";
import TaskItem from "./task-item/TaskItem";

interface TaskListProps {
	tasks: Task[];
	onClick(task: Task): void;
}

function TaskList({ tasks, onClick }: TaskListProps) {
	return (
		<div className={classes.tasks}>
			<span className={classes.tasksCount}>Количество задач: {tasks.length}</span>
			<div className={classes.tasksList}>
				{tasks.map((task) => (
					<TaskItem task={task} key={task.id} onClick={() => onClick(task)} />
				))}
			</div>
		</div>
	);
}

export default TaskList;
