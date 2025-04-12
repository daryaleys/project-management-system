import classes from "./BoardTasks.module.css";
import { Task, TaskStatusEnum } from "../../types/tasks.type";
import BoardTaskItem from "./board-task-item/BoardTaskItem";
import { BoardTasksList } from "../../types/boards.type";

function BoardTasks({ tasks }: { tasks: BoardTasksList }) {
	return (
		<div className={classes.tasksGrid}>
			{Object.entries(tasks).map(([status, list]) => (
				<div className={classes.tasksColumn} key={status}>
					<h3 className={classes.columnTitle}>{TaskStatusEnum[status]}</h3>

					{list.length 
						? list.map((task: Task) => <BoardTaskItem {...task} key={task.id} />) 
						: <span className={classes.tasksEmpty}>Нет задач</span>}
				</div>
			))}
		</div>
	);
}

export default BoardTasks;
