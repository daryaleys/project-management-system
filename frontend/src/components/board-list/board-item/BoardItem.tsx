import { NavLink } from "react-router";
import { Board } from "../../../types/boards.type";
import classes from "./BoardItem.module.css";

function BoardItem({ name, description, id }: Board) {
	return (
		<div className={classes.board}>
			<div className={classes.boardInfo}>
				<span className={classes.boardName}>{name}</span>
				<span className={classes.boardDescription}>{description}</span>
			</div>

			<NavLink to={`${id}`} end>
				Перейти к доске
			</NavLink>
		</div>
	);
}

export default BoardItem;
