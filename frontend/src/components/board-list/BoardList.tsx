import classes from "./BoardList.module.css";
import { Board } from "../../types/board-type";
import BoardItem from "./board-item/BoardItem";

function BoardList({ boards }: { boards: Board[] }) {
	return (
		<div className={classes.boards}>
			{boards.map((board) => (
				<BoardItem {...board} key={board.id} />
			))}
		</div>
	);
}

export default BoardList;
