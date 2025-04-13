import classes from "./BoardTasks.module.css";
import { STATUS, Task, TaskStatus } from "../../types/tasks.type";
import BoardTaskItem from "./board-task-item/BoardTaskItem";
import { BoardTasksList } from "../../types/boards.type";

function BoardTasks({ tasks, openTask }: { tasks: BoardTasksList; openTask(task: Task): void }) {
	return (
		<>
			<div className={classes.tasksGrid}>
				{Object.entries(tasks).map(([status, list]) => (
					<div className={classes.tasksColumn} key={status}>
						<h3 className={classes.columnTitle}>{STATUS[status as TaskStatus]}</h3>

						{list.length ? list.map((task: Task) => <BoardTaskItem {...task} key={task.id} onClick={() => openTask(task)} />) : <span className={classes.tasksEmpty}>Нет задач</span>}
					</div>
				))}
			</div>
		</>
	);
}

export default BoardTasks;
