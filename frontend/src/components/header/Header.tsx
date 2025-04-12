import { NavLink } from "react-router";
import classes from "./Header.module.css";
import Button from "../ui/button/button";

function Header() {
	const createTask = () => {
		console.log("header click");
	};

	return (
		<header className={classes.header}>
			<div className={classes.headerContainer}>
				<nav className={classes.headerNav}>
					<NavLink to="/issues" end className={({ isActive }) => (isActive ? classes.headerLink_active : classes.headerLink)}>
						Все задачи
					</NavLink>
					<NavLink to="/boards" end className={({ isActive }) => (isActive ? classes.headerLink_active : classes.headerLink)}>
						Проекты
					</NavLink>
				</nav>

				<Button onClick={createTask}>Создать задачу</Button>
			</div>
		</header>
	);
}

export default Header;
