import { NavLink } from "react-router";
import classes from "./Header.module.css";
import Button from "../ui/button/Button";
import { useContext } from "react";
import TaskForm from "../task-form/TaskForm";
import { ModalContext } from "../../context/ModalContext";
import { useTasks } from "../../api/api-tasks";

function Header() {
	const { openModal } = useContext(ModalContext);
	const { refetch } = useTasks();

	return (
		<header className={classes.header}>
			<div className={classes.headerContainer}>
				<nav className={classes.headerNav}>
					<NavLink to="/tasks" end className={({ isActive }) => (isActive ? classes.headerLink_active : classes.headerLink)}>
						Все задачи
					</NavLink>
					<NavLink to="/boards" className={({ isActive }) => (isActive ? classes.headerLink_active : classes.headerLink)}>
						Проекты
					</NavLink>
				</nav>

				<Button onClick={() => openModal(<TaskForm onSuccess={() => refetch()} />)}>Создать задачу</Button>
			</div>
		</header>
	);
}

export default Header;
