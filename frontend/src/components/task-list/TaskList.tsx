import { Task } from "../../types/tasks.type";
import classes from "./TaskList.module.css";
import TaskItem from "./task-item/TaskItem";

function TaskList({ tasks }: { tasks: Task[] }) {
	return (
		<div className={classes.tasks}>
			<span className={classes.tasksCount}>Количество задач: {tasks.length}</span>
			<div className={classes.tasksList}>
				{tasks.map((task) => (
					<TaskItem {...task} key={task.id} />
				))}
			</div>
		</div>
	);
}

export default TaskList;
